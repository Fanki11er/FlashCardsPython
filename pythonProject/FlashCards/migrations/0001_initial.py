# Generated by Django 4.1.7 on 2023-05-13 11:24

import datetime
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
            name='FlashCard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('front_text', models.CharField(max_length=255, unique=True)),
                ('back_text', models.CharField(max_length=255, unique=True)),
                ('status', models.CharField(choices=[('NEW', 'Card not learned'), ('LEARNT', 'Card learned'), ('LEARN', 'Card to learn')], default='NEW', max_length=15)),
                ('correct_at_row', models.PositiveIntegerField(default=0)),
                ('next_session', models.DateField(default=datetime.date.today)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
