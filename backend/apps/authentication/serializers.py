from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import User
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password

        
class UserSerializer(serializers.ModelSerializer):
    username = serializers.EmailField(required=True)
    password = serializers.CharField(min_length=6, write_only=True, required=True)
        
    def validate_password(self, value):
        return make_password(value)

    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'is_staff', 'password')
        
    def create_user(self, validated_data):
        user = User.objects.create(**validated_data)
        Token.objects.create(user=user)
        return user
    