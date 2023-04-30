from User.models import UserSettings
from rest_framework import serializers
from User.models import User


class MeSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()
    class Meta:
        model = User
        fields = ('username',)

    def get_username(self, obj):
        return obj
