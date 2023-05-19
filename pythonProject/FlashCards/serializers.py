from .models import FlashCard
from rest_framework import serializers
from FlashCards.models import STATUSES


class FlashcardsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlashCard
        fields = '__all__'






    




    
