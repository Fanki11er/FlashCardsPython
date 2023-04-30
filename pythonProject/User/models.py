from django.contrib.auth.models import AbstractUser
from django.db import models

#from django.contrib.auth.models import User
class User(AbstractUser):
    friends = models.ManyToManyField("User", blank=True)

class UserSettings(models.Model):
    daily_flashcards = models.PositiveIntegerField(default=25)
    maximum_break = models.PositiveIntegerField(default=30)
    percent_new = models.PositiveIntegerField(default=30)
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, related_name="user_settings")

class Status(models.Model):
    all_flashcards = 0
    new_flashcards = 0
    to_learn_flashcards = 0
    class Meta:
        managed = False
