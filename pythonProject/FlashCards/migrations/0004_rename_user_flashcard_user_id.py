# Generated by Django 4.1.7 on 2023-04-30 10:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('FlashCards', '0003_alter_flashcard_correct_at_row'),
    ]

    operations = [
        migrations.RenameField(
            model_name='flashcard',
            old_name='user',
            new_name='user_id',
        ),
    ]