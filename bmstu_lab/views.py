from rest_framework import viewsets
from bmstu_lab.serializers import CategoriesSerializer
from bmstu_lab.serializers import ItemsSerializer
from bmstu_lab.serializers import CustomersSerializer
from bmstu_lab.serializers import ItemsDepthSerializer
from bmstu_lab.serializers import BasketsSerializer
from bmstu_lab.serializers import BasketsDepthSerializer
from django.shortcuts import render
from bmstu_lab.models import Categories
from bmstu_lab.models import Baskets
from bmstu_lab.models import Items
from bmstu_lab.models import Customers
# Create your views here.
from datetime import date


class CategoriesViewSet(viewsets.ModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer


class ItemsViewSet(viewsets.ModelViewSet):
    queryset = Items.objects.all()
    serializer_class = ItemsSerializer


class ItemsDepthViewSet(viewsets.ModelViewSet):
    serializer_class = ItemsDepthSerializer
    def get_queryset(self):
        queryset = Items.objects.all()
        if self.request.method == 'GET':
            params = self.request.query_params.dict()
            try:
                if params['q'] == '':
                    pass
                else:
                    queryset = queryset.filter(name__icontains=params['q'])
            except:
                pass
            try:
                queryset = queryset.filter(price__lte=params['max_cost'])
            except:
                pass
            try:
                queryset = queryset.filter(price__gte=params['min_cost'])
            except:
                pass
        return queryset.order_by('name')


class BasketsViewSet(viewsets.ModelViewSet):
    queryset = Baskets.objects.all()
    serializer_class = BasketsSerializer


class BasketsDepthViewSet(viewsets.ModelViewSet):
    queryset = Baskets.objects.all()
    serializer_class = BasketsDepthSerializer



class CustomersViewSet(viewsets.ModelViewSet):
    queryset = Customers.objects.all()
    serializer_class = CustomersSerializer

