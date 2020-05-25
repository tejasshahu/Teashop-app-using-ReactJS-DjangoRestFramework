from django.db import models

# Create your models here.
class Product(models.Model):

	id = models.AutoField(primary_key=True)
	name = models.CharField(db_column='name', unique=True, max_length=40)
	description = models.CharField(db_column='description', max_length=2000)
	price = models.IntegerField(db_column='price')
