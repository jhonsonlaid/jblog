# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-16 07:04
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_auto_20161216_0650'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='timestamp',
            field=models.DateField(default=datetime.datetime(2016, 12, 16, 7, 4, 31, 211403)),
        ),
    ]
