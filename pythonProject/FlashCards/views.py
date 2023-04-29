from .models import FlashCard, UserSettings
from rest_framework import viewsets
from .serializer import FlashCardSerializer, UserSettingsSerializer

class FlashCardViewSet(viewsets.ModelViewSet):
    queryset = FlashCard.objects.all()
    serializer_class = FlashCardSerializer

class UserSettingsViewSet(viewsets.ModelViewSet):
    queryset = UserSettings.objects.all()
    serializer_class = UserSettingsSerializer

