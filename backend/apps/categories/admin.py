from atexit import register
from django.contrib import admin
from .models import Brand, Color, Tag, Category

# Register your models here.
admin.site.register(Category)
admin.site.register(Tag)
admin.site.register(Color)
admin.site.register(Brand)
