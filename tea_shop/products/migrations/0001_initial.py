# Generated by Django 3.0.6 on 2020-05-23 08:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=40, unique=True)),
                ('description', models.CharField(max_length=2000)),
                ('price', models.IntegerField()),
            ],
        ),
    ]
