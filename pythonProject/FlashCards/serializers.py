from .models import FlashCard
from rest_framework import serializers
from django.db import transaction
from datetime import timedelta, timezone
from FlashCards.models import STATUSES
from User.models import User
from rest_framework.fields import CurrentUserDefault
import datetime


class FlashcardsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlashCard
        fields = '__all__'






    




    
