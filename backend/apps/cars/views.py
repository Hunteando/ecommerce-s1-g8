from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Car

# Create your views here.

class CarView(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    
    permission_classes = (AllowAny, )
    
    