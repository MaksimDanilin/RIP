from django.db import models

class Categories(models.Model):
    title = models.CharField(max_length=30, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'Categories'


class Customers(models.Model):
    id_customer = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20, blank=True, null=True)
    surname = models.CharField(max_length=20, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    date_of_registration = models.DateField()

    class Meta:
        managed = True
        db_table = 'Customers'



class Items(models.Model):
    id_item = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20, blank=True, null=True)
    description = models.CharField(max_length=50, blank=True, null=True)
    price = models.IntegerField(blank=True, null=True)
    id_category = models.ForeignKey(Categories, models.DO_NOTHING, db_column='id_category')
    photo = models.ImageField(default=None)

    class Meta:
        managed = True
        db_table = 'Items'

class Baskets(models.Model):
    item = models.ForeignKey(Items, on_delete=models.DO_NOTHING)
    customer = models.ForeignKey(Customers, on_delete=models.DO_NOTHING)
    status = models.TextField()

    class Meta:
        managed = True
        db_table = 'baskets'

class Orderitem(models.Model):
    id_order_item = models.AutoField(primary_key=True)
    id_order = models.ForeignKey('Orders', models.DO_NOTHING, db_column='id_order')
    id_item = models.ForeignKey(Items, models.DO_NOTHING, db_column='id_item')

    class Meta:
        managed = True
        db_table = 'OrderItem'


class Orders(models.Model):
    id_order = models.AutoField(primary_key=True)
    id_customer = models.ForeignKey(Customers, models.DO_NOTHING, db_column='id_customer')
    id_item = models.IntegerField()
    date_of_order = models.DateField()
    date_of_departure = models.DateField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'Orders'

# Create your models here.
