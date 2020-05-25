from django.urls import path
from rest_framework import urlpatterns

from .views import ProductList, ProductDetail


urlpatterns = [
    path('products/', ProductList.as_view()),
    path('product_operation/<int:id>/', ProductDetail.as_view()),
]
