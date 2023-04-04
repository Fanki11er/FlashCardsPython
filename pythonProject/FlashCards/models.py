from django.db import models
from django.contrib.auth.models import User



class UserSettings(models.Model):
    dailyFlashcards = models.PositiveBigIntegerField()
    maximumBreak = models.PositiveBigIntegerField()
    percentNew = models.PositiveIntegerField()
    user = models.ForeignKey(User, on_delete= models.CASCADE)


class FlashCard(models.Model):
    frontText = models.CharField(max_length= 255)
    backText = models.CharField(max_length= 255)
    status = models.BooleanField(default= 'false')
    correctAtRow = models.PositiveIntegerField()
    nextSession = models.DateTimeField()
    user = models.ForeignKey(User, on_delete= models.CASCADE)
