from django.urls import path, include
from rest_framework import routers
from .views import CarView


router = routers.DefaultRouter()
router.register('cars', CarView)

urlpatterns = [
    path('', include(router.urls)),
    
]