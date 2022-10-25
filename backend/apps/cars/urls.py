from django.urls import path, include
from rest_framework import routers
from .views import CarView, OrderView, StockView


router = routers.DefaultRouter()
router.register('cars', CarView)
router.register('orders', OrderView)

urlpatterns = [
    path('', include(router.urls)),
    
]