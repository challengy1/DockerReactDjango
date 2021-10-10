# Generated by Django 3.2.7 on 2021-10-04 02:39

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255, verbose_name='TITLE')),
                ('image', models.ImageField(blank=True, null=True, upload_to='img', verbose_name='IMAGE')),
                ('file', models.CharField(blank=True, max_length=50, null=True, verbose_name='FILE')),
                ('publisher', models.CharField(max_length=20, verbose_name='PUBLISHER')),
                ('author', models.CharField(max_length=50, verbose_name='AUTHOR')),
                ('price', models.PositiveIntegerField(blank=True, default=0, null=True, verbose_name='PRICE')),
                ('description', models.TextField(blank=True, null=True, verbose_name='DESC')),
                ('publishDate', models.DateField(blank=True, null=True, verbose_name='DATE')),
            ],
            options={
                'db_table': 'bookTable',
            },
        ),
    ]
