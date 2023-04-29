from django.urls import path

from .views import ManageUserView

app_name = "User"

urlpatterns = [
    path("me/", ManageUserView.as_view(), name="me"),
]
