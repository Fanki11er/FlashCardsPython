from django.contrib import admin
from .models import FlashCard, UserSettings
# Register your models here.


@admin.register(FlashCard)
class FlashCardAdmin(admin.ModelAdmin):
    list_display = ['id', 'front_text', 'back_text', 'status', 'correct_at_row', 'next_session', 'user']

    


@admin.register(UserSettings)
class UserSettingsAdmin(admin.ModelAdmin):
    list_display = ['id', 'daily_flashcards', 'maximum_break', 'percent_new', 'user']
    
