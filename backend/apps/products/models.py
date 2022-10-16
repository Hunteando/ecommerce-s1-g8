from django.utils import timezone
from django.db import models

from apps.categories.models import Brand, Tag, Category, Color


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    image_url = models.URLField(max_length=200)
    description = models.TextField()
    brands = models.ForeignKey(Brand, blank=True, null=True, on_delete=models.SET_NULL)
    tags = models.ManyToManyField(Tag)
    categories = models.ManyToManyField(Category)
    colors = models.ManyToManyField(Color)
    stocks = models.PositiveIntegerField()
    create_at = models.DateTimeField(default=timezone.now)
    update_at = models.DateTimeField(blank=True, null=True)
    
        
    def edit(self):
        self.update_at = timezone.now
        self.save()
        