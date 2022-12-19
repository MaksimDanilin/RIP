from rest_framework import serializers
from bmstu_lab.models import Categories
from bmstu_lab.models import Items
from bmstu_lab.models import Customers
from bmstu_lab.models import Baskets


class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = '__all__'


class ItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Items
        fields = '__all__'


class ItemsDepthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Items
        fields = '__all__'
        depth=1


class BasketsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Baskets
        fields = '__all__'


class BasketsDepthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Baskets
        fields = '__all__'
        depth=2


class CustomersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customers
        fields = '__all__'
