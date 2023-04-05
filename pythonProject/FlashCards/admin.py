from django.contrib import admin
from .models import FlashCard, UserSettings
# Register your models here.

admin.site.register(FlashCard)
admin.site.register(UserSettings)

