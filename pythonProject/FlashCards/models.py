from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


STATUSES = (
    ("NEW", "Card not learned"),
    ("LEARNED", "Card learned")
)

class UserSettings(models.Model):
    daily_flashcards = models.PositiveIntegerField(default=25)
    maximum_break = models.PositiveIntegerField(default=30)
    percent_new = models.PositiveIntegerField(default=30)
    user = models.ForeignKey(User, on_delete= models.CASCADE)


class FlashCard(models.Model):
    front_text = models.CharField(max_length= 255)
    back_text = models.CharField(max_length= 255)
    status = models.CharField(choices=(STATUSES), default='NEW', max_length=15)
    correct_at_row = models.PositiveIntegerField()
    next_session = models.DateField(default=timezone.now)
    user = models.ForeignKey(User, on_delete= models.CASCADE)

# Flashcard(id: INTEGER, front_text: VARCHAR, back_text: VARCHAR, correct_at_row: INTEGER UNSIGNED, next_session: DATE, status: VARCHAR, user_id: INTEGER)
# UserSettings (id: INTEGER, maximum_break: INTEGER UNSIGNED, percent_new: INTEGER UNSIGNED, daily_flashcards: INTEGER UNSIGNED, user_id: INTEGER)
