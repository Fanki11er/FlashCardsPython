from .models import FlashCard
from rest_framework import viewsets
from .serializer import FlashCardSerializer

class FlashCardViewSet(viewsets.ModelViewSet):
    queryset = FlashCard.objects.all()
    serializer_class = FlashCardSerializer

#class UserSettingsViewSet(viewsets.ModelViewSet):
 #   queryset = UserSettings.objects.all()
  #  serializer_class = UserSettingsSerializer

