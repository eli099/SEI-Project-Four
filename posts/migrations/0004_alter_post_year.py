# Generated by Django 4.0.5 on 2022-06-12 20:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_alter_post_description_alter_post_tags_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='year',
            field=models.PositiveIntegerField(blank=True, default=None, null=True),
        ),
    ]
