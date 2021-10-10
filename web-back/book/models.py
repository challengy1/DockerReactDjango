import uuid
from django.db import models

class Book(models.Model):
    class Meta:
        db_table = 'bookTable'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(verbose_name='TITLE', max_length=255)
    image = models.ImageField(verbose_name='IMAGE', null=True, blank=True, upload_to='img')
    file = models.CharField(verbose_name='FILE', null=True, blank=True, max_length=50)
    publisher = models.CharField(verbose_name='PUBLISHER', max_length=20)
    author = models.CharField(verbose_name='AUTHOR', max_length=50)
    price = models.PositiveIntegerField(verbose_name='PRICE', null=True, blank=True, default=0)
    description = models.TextField(verbose_name='DESC', null=True, blank=True)
    publishDate = models.DateField(verbose_name='DATE', null=True, blank=True)

    def __str__(self):
        return self.title
