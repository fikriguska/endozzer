# Generated by Django 3.1.8 on 2021-09-17 03:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_auto_20210916_1552'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='is_influenzer',
        ),
        migrations.AddField(
            model_name='user',
            name='role',
            field=models.PositiveSmallIntegerField(choices=[(0, 'Influenzer'), (1, 'Company'), (2, 'Admin')], default=0),
        ),
    ]
