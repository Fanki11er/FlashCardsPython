from rest_framework import serializers
from User.models import UserSettings, User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from django.db import transaction

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = (
            "password",
            "password2",
            "email",
            "username",
        )
        extra_kwargs = {"username": {"required": True}}

    def validate(self, attrs):
        if attrs["password"] != attrs["password2"]:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        with transaction.atomic():
            user = User.objects.create(email=validated_data["email"], username=validated_data["username"])

            user.set_password(validated_data["password"])
            user.save()
            user_settings = UserSettings.objects.create(user=user)
            user_settings.save()
        

        return user