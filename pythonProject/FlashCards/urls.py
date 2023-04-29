from rest_framework import routers
from django.urls import include, path
from .views import UserSettingsViewSet, FlashCardViewSet

router = routers.DefaultRouter()
router.register(r'flashcards', FlashCardViewSet)
router .register(r'usersettings', UserSettingsViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api-auth', include('rest_framework.urls', namespace = 'rest_framework'))
]
