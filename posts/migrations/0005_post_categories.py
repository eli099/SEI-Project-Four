# Generated by Django 4.0.5 on 2022-06-12 21:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0001_initial'),
        ('posts', '0004_alter_post_year'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='categories',
            field=models.ManyToManyField(related_name='posts', to='categories.category'),
        ),
    ]
