from django.urls import path

from .views import ManageUserView
from .views import getUserSettings, updateUserSettings

app_name = "User"

urlpatterns = [
    path("me/", ManageUserView.as_view(), name="me"),
    path("Settings/",getUserSettings , name="get-settings"),
     path("Settings/Change/",updateUserSettings , name="update-settings"),
]
