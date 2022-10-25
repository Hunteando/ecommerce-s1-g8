from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class User(AbstractUser):
    email = models.EmailField(max_length=150, unique=True)
    dni = models.CharField(max_length=12, blank=True, null=True, unique=True)
    direction = models.TextField(blank=True, null=True)
    cell = models.CharField(max_length=13, blank=True, null=True)
    image = models.URLField(max_length=200, blank=True, null=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'password']