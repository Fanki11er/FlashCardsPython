from django.contrib import admin
from .models import FlashCard
from User.models import UserSettings
# Register your models here.


@admin.register(FlashCard)
class FlashCardAdmin(admin.ModelAdmin):
    list_display = ['front_text', 'back_text', 'status', 'correct_at_row', 'next_session']

    


@admin.register(UserSettings)
class UserSettingsAdmin(admin.ModelAdmin):
    list_display = ['daily_flashcards', 'maximum_break', 'percent_new']
    
