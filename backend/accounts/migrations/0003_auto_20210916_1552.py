# Generated by Django 3.1.8 on 2021-09-16 15:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_user_roles'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='roles',
        ),
        migrations.AddField(
            model_name='user',
            name='is_influenzer',
            field=models.BooleanField(default=True),
        ),
        migrations.DeleteModel(
            name='Role',
        ),
    ]