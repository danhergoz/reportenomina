# Generated by Django 3.2.8 on 2021-10-27 03:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authApp', '0002_nomina'),
    ]

    operations = [
        migrations.RenameField(
            model_name='nomina',
            old_name='dotacion',
            new_name='Dotacion',
        ),
    ]
