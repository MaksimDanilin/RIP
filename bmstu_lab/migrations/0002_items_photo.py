# Generated by Django 4.1.3 on 2022-12-13 08:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bmstu_lab', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='items',
            name='photo',
            field=models.ImageField(default=None, upload_to=''),
        ),
    ]
