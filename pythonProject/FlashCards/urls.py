from django.urls import path
from .views import apiOverview, flashcardsList, createFlashcard, updateFlashcard, deleteFlashcard, checkAnswer

urlpatterns = [
    path("api/", apiOverview, name='api_overview'),
    path("All/", flashcardsList, name='flashcards-list'),
    path("Create/", createFlashcard, name='flashcards-create'),
    path("Update/<str:pk>/", updateFlashcard, name='flashcards-update'),
    path("Delete/<str:pk>/", deleteFlashcard, name='flashcards-delete'),
    path("Check/<str:pk>/", checkAnswer, name='flashcards-check')
]