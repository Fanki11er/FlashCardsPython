from django.apps import AppConfig

class FlashcardsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'FlashCards'
    
   

    def ready(self):
        from .Flashcards_scheduler import scheduler
        scheduler.start()
        
