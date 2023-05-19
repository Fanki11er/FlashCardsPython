from django.contrib.auth import get_user_model
from apscheduler.schedulers.background import BackgroundScheduler
import sendgrid
from sendgrid.helpers.mail import Mail
from django.conf import settings
from twilio.rest import Client

def job_user_statistics(user):
    
    good_answers_in_period = user.good_answers_in_period
    wrong_answers_in_period = user.wrong_answers_in_period
    new_flashcards_in_period = user.new_flashcards_in_period
    all_user_flashcards = user.all_user_flashcards

    message = Mail(
        from_email=settings.DEFAULT_FROM_EMAIL,
        to_emails=user.email,
        subject='Your Progress Update',
        plain_text_content=f"{user.username} you have: \n {good_answers_in_period} good answers \n {wrong_answers_in_period} wrong answers \n Yoy have {all_user_flashcards} flashcards including {new_flashcards_in_period} new flashcards"
    )

    try:
        sg = sendgrid.SendGridAPIClient(api_key=settings.SENDGRID_API_KEY)
        response = sg.send(message)
        print(f"Mail send to: {user.email}")
        print(f"Status code: {response.status_code}")
    except Exception as e:
        print(str(e))

    user.good_answers_in_period = 0
    user.wrong_answers_in_period = 0
    user.new_flashcards_in_period = 0
    user.all_user_flashcards = 0

def job_send_reminder(user):
        account_sid = settings.TWILIO_ACCOUNT_SID
        auth_token = settings.TWILIO_AUTH_TOKEN
        client = Client(account_sid, auth_token)

        client.messages.create(
            body=f'Hey {user.username} remember to practice your language skills today!',
            from_= settings.TWILIO_NUMBER,
            to=settings.MY_NUMBER
        )


def execute_send_stats_for_all_users():
    print("Send stats")
    User = get_user_model()
    # Retrieve all registered users
    users = User.objects.all()

    # Execute the task for each user
    for user in users:
        job_user_statistics(user)
        user.save()

def execute_send_reminder_to_users():
    print("Send reminder")
    User = get_user_model()
    # Retrieve all registered users
    inactiveUsers = User.objects.all().filter(was_active_today = False)
    allUsers = User.objects.all()

    # Execute the task for each user
    for user in inactiveUsers:
        job_send_reminder(user)

    for user in allUsers:
        user.was_active_today = False
        user.save()

def start():
    scheduler = BackgroundScheduler()
    scheduler.add_job(execute_send_stats_for_all_users, "interval", minutes=2, id="stats", replace_existing=True)
    scheduler.add_job(execute_send_reminder_to_users, "interval", minutes=3, id="reminders", replace_existing=True)
    scheduler.start()
    
    
