from django.urls import path, include
from rest_framework import routers
from .views import CategoryView


router = routers.DefaultRouter()
router.register('categories', CategoryView)

urlpatterns = [
    path('', include(router.urls)),
    
]