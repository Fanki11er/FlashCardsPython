from django.db import models
from User.models import User
import datetime


STATUSES = (
    ("NEW", "Card not learned"),
    ("LEARNT", "Card learned"),
    ("LEARN", "Card to learn")
)

class FlashCard(models.Model):
    front_text = models.CharField(max_length= 255, unique=True)
    back_text = models.CharField(max_length= 255, unique=True)
    status = models.CharField(choices=(STATUSES), default='NEW', max_length=15)
    correct_at_row = models.PositiveIntegerField( default=0)
    next_session = models.DateField(default=datetime.date.today)
    user = models.ForeignKey(User, on_delete=models.CASCADE )



