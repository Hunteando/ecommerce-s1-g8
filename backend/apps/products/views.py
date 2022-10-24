
# Django Rest Framework
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny

# Models, Serializers
from .models import Product
from .serializers import ProductSerializer

# Create your views here.

class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (AllowAny, )
    
    
    
  