from rest_framework import generics
from .serializers import MeSerializer
from User.models import User, UserSettings
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSettingsSerializer
from rest_framework.response import Response


class ManageUserView(generics.RetrieveAPIView):

    serializer_class = MeSerializer

    def get_queryset(self):
        return User.objects.all()

    def get_object(self):
        return self.request.user.username
    


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserSettings(request):
     
    settings = UserSettings.objects.get(user=request.user)
    if(settings):
        serializer = UserSettingsSerializer(settings)
        return Response(serializer.data, status="200")
    return Response("Incorrect user", status='400')

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def updateUserSettings(request):
     
    user = User.objects.filter(id = request.user.id).first()
    settings = UserSettings.objects.get(user=user)
    if(user and settings):
        serializer = UserSettingsSerializer(instance=settings, data=request.data, partial=True)
        if(serializer.is_valid()):
            serializer.save()
        return Response(serializer.data, status="200")
    return Response("Incorrect user", status='400')