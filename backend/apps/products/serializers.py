from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'image_url', 'brand', 'tags', 'category', 'colors', 'create_at', 'update_at', 'description')
        fields_read_only = ('create_at', 'update_at')