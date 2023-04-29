from .models import FlashCard, UserSettings
from rest_framework import serializers

class FlashCardSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FlashCard
        fields = ['user', 'frontText', 'backText', 'status', 'correctAddRow', 'nextSession']

class UserSettingsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserSettings
        fields = ['dailyFlashcards', 'maximumBreak', 'percentNew']





    
