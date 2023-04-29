from .models import FlashCard
from rest_framework import serializers

class FlashCardSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FlashCard
        fields = ['front_text', 'back_text', 'status', 'correct_at_row', 'next_session']

#class UserSettingsSerializer(serializers.HyperlinkedModelSerializer):
 #   class Meta:
  #      model = UserSettings
   #     fields = ['daily_flashcards', 'maximum_break', 'percent_new']





    
