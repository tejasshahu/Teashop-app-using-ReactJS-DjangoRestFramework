from rest_framework.serializers import ModelSerializer

from .models import Product


class ProductSerializer(ModelSerializer):
	class Meta:
		model = Product
		fields = ['id', 'name', 'description', 'price']

	def create(self, validated_data):
		"""
		Create and return a new `Product` instance, given the validated data.
		"""
		return Product.objects.create(**validated_data)

	def update(self, instance, validated_data):
		"""
		Update and return an existing `Product` instance, given the validated data.
		"""
		instance.id = validated_data.get('id', instance.id)
		instance.name = validated_data.get('name', instance.name)
		instance.description = validated_data.get('description', instance.description)
		instance.price = validated_data.get('language', instance.price)
		instance.save()
		return instance
