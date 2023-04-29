from rest_framework import generics
#from django.contrib.auth.models import User
from .serializers import MeSerializer
from User.models import User


class ManageUserView(generics.RetrieveAPIView):

    serializer_class = MeSerializer

    def get_queryset(self):
        return User.objects.all()

    def get_object(self):
        return self.request.user.username
