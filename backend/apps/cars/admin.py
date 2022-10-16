from django.contrib import admin
from .models import Car, Order, Stock

# Register your models here.
admin.site.register(Car)
admin.site.register(Order)
admin.site.register(Stock)