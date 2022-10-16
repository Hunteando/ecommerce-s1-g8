from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=50)

class Tag(models.Model):
    name = models.CharField(max_length=50)
    
class Color(models.Model):
    name = models.CharField(max_length=50)
    
class Brand(models.Model):
    name = models.CharField(max_length=50)