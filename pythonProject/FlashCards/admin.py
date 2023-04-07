from django.contrib import admin
from .models import FlashCard, UserSettings
# Register your models here.


@admin.register(FlashCard)
class FlashCardAdmin(admin.ModelAdmin):
    list_display = ['id', 'frontText', 'backText', 'status', 'correctAtRow', 'nextSession', 'user']

    


@admin.register(UserSettings)
class UserSettingsAdmin(admin.ModelAdmin):
    list_display = ['id', 'dailyFlashcards', 'maximumBreak', 'percentNew', 'user']
    
