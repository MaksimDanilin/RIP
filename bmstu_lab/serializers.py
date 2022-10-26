from rest_framework import serializers
from bmstu_lab.models import Categories
from bmstu_lab.models import Items
from bmstu_lab.models import Customers


class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ["id", "title"]


class ItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Items
        fields = ["id_item", "name", "discription", "price", "id_category"]


class CustomersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customers
        fields = ["id_customer", "name", "surname", "date_of_birth", "date_of_registration"]
