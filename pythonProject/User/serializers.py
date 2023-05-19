from User.models import UserSettings
from rest_framework import serializers
from User.models import User, Status


class MeSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()
    class Meta:
        model = User
        fields = ('username',)

    def get_username(self, obj):
        return obj
    
class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = ('all_flashcards', 'new_flashcards','to_learn_flashcards')

class UserSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSettings
        fields = '__all__'
