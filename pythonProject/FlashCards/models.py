from django.db import models
#from django.contrib.auth.models import User
from User.models import User

from django.utils import timezone


STATUSES = (
    ("NEW", "Card not learned"),
    ("LEARNED", "Card learned")
)

class FlashCard(models.Model):
    front_text = models.CharField(max_length= 255)
    back_text = models.CharField(max_length= 255)
    status = models.CharField(choices=(STATUSES), default='NEW', max_length=15)
    correct_at_row = models.PositiveIntegerField()
    next_session = models.DateField(default=timezone.now)
    user = models.ManyToOneRel(User, on_delete=models.CASCADE, to=User, field_name="flashcards")


