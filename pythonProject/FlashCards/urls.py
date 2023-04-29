from rest_framework import routers
from django.urls import include, path
from .views import  FlashCardViewSet

#router = routers.DefaultRouter()
#router.register(r'flashcards', FlashCardViewSet)
#router .register(r'usersettings', UserSettingsViewSet)

urlpatterns = [
    path('', FlashCardViewSet.as_view({'get': 'list'}))
    #path('', include(router.urls)),
    #path('api-auth', include('rest_framework.urls', namespace = 'rest_framework'))
]
