from django.db import models
from apps.categories.models import Brand, Tag, Category, Color


# Create your models here.
    
class Product(models.Model):
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    image_url = models.URLField(max_length=200)
    description = models.TextField()
    brand = models.ForeignKey(Brand, blank=True, null=True, on_delete=models.SET_NULL)
    tags = models.ManyToManyField(Tag)
    category = models.ForeignKey(Category, blank=True, null=True, on_delete=models.SET_NULL)
    colors = models.ManyToManyField(Color)
    create_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True, auto_now_add=False)
    