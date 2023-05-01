from django.urls import path
from .views import apiOverview, flashcardsList, createFlashcard, updateFlashcard, deleteFlashcard, updateProcessedFlashcard, getFlashcardsToLearn, getStatus

urlpatterns = [
    path("api/", apiOverview, name='api_overview'),
    path("All/", flashcardsList, name='flashcards-list'),
    path("Create/", createFlashcard, name='flashcards-create'),
    path("Update/<str:pk>/", updateFlashcard, name='flashcards-update'),
    path("Delete/<str:pk>/", deleteFlashcard, name='flashcards-delete'),
    path("Check/<str:pk>/", updateProcessedFlashcard, name='flashcards-check'),
    path("Learn/", getFlashcardsToLearn, name='flashcards-to-learn'),
    path("Status/", getStatus, name='flashcards-status')
]