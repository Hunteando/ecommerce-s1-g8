from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny

from .serializers import BrandSerializer, CategorySerializer, ColorSerializer, TagSerializer
from .models import Brand, Category, Color, Tag

# Create your views here.

class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (AllowAny, )

class TagView(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    permission_classes = (AllowAny, )

class ColorView(viewsets.ModelViewSet):
    queryset = Color.objects.all()
    serializer_class = ColorSerializer
    permission_classes = (AllowAny, )

class BrandView(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    permission_classes = (AllowAny, )
    