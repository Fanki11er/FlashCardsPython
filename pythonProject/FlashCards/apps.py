from django.apps import AppConfig

scheduler_started = False
class FlashcardsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'FlashCards'
    
   

    def ready(self):
        global scheduler_started 

        if not scheduler_started:
            print("Starting scheduler")
            from .Flashcards_scheduler import scheduler
            scheduler.start()
            scheduler_started = True
