from django.shortcuts import render
from bmstu_lab.models import Categories
from bmstu_lab.models import Items
# Create your views here.
from datetime import date
'''
f_categories = { 'data': {
        'categories': [
            {'title': 'Овощной прилавок', 'id': 1, 'name1': 'Помидоры',
             'discription1': 'Помидоры розовые Азербайджан ', 'price1': 83,
             'name2': 'Огурцы', 'discription2': 'Огурцы луховицки ', 'price2': 85},
            {'title': 'Молочный прилавок', 'id': 2, 'name1': 'Молоко',
             'discription1': 'Молоко 2,5% Простоквашино', 'price1': 75,
             'name2': 'Сыры', 'discription2': 'Сыр Чеддер Cheese Gallery', 'price2': 329},
            {'title': 'Булочная', 'id': 3, 'name1': 'Хлеб из пекарен',
             'discription1': 'Багет Из Лавки испанский', 'price1': 89,
             'name2': 'Выпечка', 'discription2': 'Мини-круассан миндальный', 'price2': 99},
            {'title': 'Вода и напитки', 'id': 4, 'name1': 'Минеральная вода',
             'discription1': 'Вода минеральная Borjomi', 'price1': 75,
             'name2': 'Соки прямого отжима', 'discription2': 'Сок гранатовый Benature прямой отжим', 'price2': 339},
            {'title': 'Сладкое и снеки', 'id': 5, 'name1': 'Картофельные чипсы',
             'discription1': 'Lay\'s Сыр', 'price1': 139,
             'name2': 'Молочный шоколад', 'discription2': 'Шоколад с печеньем Oreo Milka', 'price2': 479},
            {'title': 'Мясо, птица, рыба', 'id': 6},
            {'title': 'Заморозка', 'id': 7},
            {'title': 'Бакалея', 'id': 8},
        ]
    }}

def GetCategories(request):
    return render(request, 'categories.html', f_categories)

def GetCategory(request, id):
    return render(request, 'category.html', {'data': {
        'current_date': date.today(),
        'id': id,
        'category': {
            'title': f_categories['data']['categories'][id-1]['title'],
            'name1': f_categories['data']['categories'][id - 1]['name1'],
            'discription1': f_categories['data']['categories'][id - 1]['discription1'],
            'price1': f_categories['data']['categories'][id - 1]['price1'],
            'name2': f_categories['data']['categories'][id - 1]['name2'],
            'discription2': f_categories['data']['categories'][id - 1]['discription2'],
            'price2': f_categories['data']['categories'][id - 1]['price2']
        }
    }})
'''

def GetCategories(request):
    return render(request, 'categories.html', {'data': {
        'categories': Categories.objects.all()
    }})

def GetItems(request, id):
    return render(request, 'category.html', {'data': {
        'category': Categories.objects.filter(id=id)[0],
        'items': Items.objects.filter(id_category=id)
    }})
