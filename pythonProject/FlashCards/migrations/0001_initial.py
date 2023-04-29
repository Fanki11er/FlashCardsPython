# Generated by Django 4.1.7 on 2023-04-29 16:29

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FlashCard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('front_text', models.CharField(max_length=255)),
                ('back_text', models.CharField(max_length=255)),
                ('status', models.CharField(choices=[('NEW', 'Card not learned'), ('LEARNED', 'Card learned')], default='NEW', max_length=15)),
                ('correct_at_row', models.PositiveIntegerField()),
                ('next_session', models.DateField(default=django.utils.timezone.now)),
            ],
        ),
    ]
