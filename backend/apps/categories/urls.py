from django.urls import path, include
from rest_framework import routers
from .views import BrandView, CategoryView, ColorView, TagView


router = routers.DefaultRouter()
router.register('categories', CategoryView)
router.register('tags', TagView)
router.register('colors', ColorView)
router.register('brands', BrandView)

urlpatterns = [
    path('', include(router.urls)),
]