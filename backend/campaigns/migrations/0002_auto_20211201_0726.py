# Generated by Django 3.2.9 on 2021-12-01 07:26

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('campaigns', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='campaign',
            name='periode_end',
            field=models.DateTimeField(default=datetime.datetime(2021, 12, 1, 7, 26, 17, 664505, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='campaign',
            name='periode_start',
            field=models.DateTimeField(default=datetime.datetime(2021, 12, 1, 7, 26, 22, 481624, tzinfo=utc)),
            preserve_default=False,
        ),
    ]