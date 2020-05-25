from products.models import Product
from products.serializers import ProductSerializer

from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action


class ProductList(APIView):
	"""
	List all products, or add a new product
	"""
	def get(self, request, format=None):
		products = Product.objects.all()
		serializer_class = ProductSerializer(products, many=True)
		return Response(serializer_class.data)

	def post(self, request, format=None):
		product_serializer = ProductSerializer(data=request.data['data'])
		if product_serializer.is_valid():
			product_serializer.save()
			return Response(product_serializer.data, status=status.HTTP_201_CREATED)
		return Response(product_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductDetail(APIView):
	"""
	Retrieve, update or delete a product instance.
	"""
	def get_object(self, id):
		try:
			return Product.objects.get(id=id)
		except Product.DoesNotExist:
			raise Http404

	def get(self, request, id, format=None):
		product = self.get_object(id)
		serializer = ProductSerializer(product)
		return Response(serializer.data)

	def put(self, request, id, format=None):
		product = self.get_object(id)
		serializer = ProductSerializer(product, data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request, id, format=None):
		# import pdb; pdb.set_trace()
		product = self.get_object(id=id)
		product.delete()
		serializer = {"response": "success"}
		print(status.HTTP_204_NO_CONTENT, status)
		return Response(serializer)
