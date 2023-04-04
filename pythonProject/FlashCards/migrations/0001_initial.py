# Generated by Django 4.1.7 on 2023-04-04 19:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserSettings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dailyFlashcards', models.PositiveBigIntegerField()),
                ('maximumBreak', models.PositiveBigIntegerField()),
                ('percentNew', models.PositiveIntegerField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='FlashCard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('frontText', models.CharField(max_length=255)),
                ('backText', models.CharField(max_length=255)),
                ('status', models.CharField(choices=[('NEW', 'New flash card'), ('EMPTY', 'Viewed flash card')], default='NEW', max_length=25)),
                ('correctAtRow', models.PositiveIntegerField()),
                ('nextSession', models.DateTimeField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
