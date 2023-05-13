import schedule
import time
#from User.models import User
from django.contrib.auth import get_user_model
import threading

def job_user_statistics(user):
    # Access the user's attributes
    good_answers_in_period = user.good_answers_in_period
    wrong_answers_in_period = user.wrong_answers_in_period
    new_flashcards_in_period = user.new_flashcards_in_period
    all_user_flashcards = user.all_user_flashcards

    # Your job logic here
    print(f"User: {user.username}")
    print(f"Good Answers in Period: {good_answers_in_period}")
    print(f"Wrong Answers in Period: {wrong_answers_in_period}")
    print(f"New Flashcards in Period: {new_flashcards_in_period}")
    print(f"All User Flashcards: {all_user_flashcards}")

    good_answers_in_period = 0
    wrong_answers_in_period = 0
    new_flashcards_in_period = 0
    all_user_flashcards = 0


def execute_send_stats_for_all_users():
    User = get_user_model()
    # Retrieve all registered users
    users = User.objects.all()

    # Execute the task for each user
    for user in users:
        job_user_statistics(user)

def execute_send_reminder_to_users():
    User = get_user_model()
    # Retrieve all registered users
    inactiveUsers = User.objects.all().filter(was_active_today = False)
    allUsers = User.objects.all()

    # Execute the task for each user
    for user in inactiveUsers:
        job_user_statistics(user)

    for user in allUsers:
        user.was_active_today = False

def execute_test():
    print("TEEeest")


#schedule.every().sunday.at('20:00').do(execute_send_stats_for_all_users)
#schedule.every().day.at('20:00').do(execute_send_stats_for_all_users)
schedule.every(5).seconds.do(execute_test)

# while True:
#     schedule.run_pending()
#     #time.sleep(45)
#     time.sleep(10)

def run_continuously(interval=10):
    """Continuously run, while executing pending jobs at each
    elapsed time interval.
    @return cease_continuous_run: threading. Event which can
    be set to cease continuous run. Please note that it is
    *intended behavior that run_continuously() does not run
    missed jobs*. For example, if you've registered a job that
    should run every minute and you set a continuous run
    interval of one hour then your job won't be run 60 times
    at each interval but only once.
    """
    cease_continuous_run = threading.Event()

    class ScheduleThread(threading.Thread):
        @classmethod
        def run(cls):
            while not cease_continuous_run.is_set():
                schedule.run_pending()
                time.sleep(interval)

    continuous_thread = ScheduleThread()
    continuous_thread.start()
    return cease_continuous_run

# Start the background thread
stop_run_continuously = run_continuously()

# Do some other things...
time.sleep(10)

# Stop the background thread
stop_run_continuously.set()