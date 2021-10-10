import base64

from django.core.files.base import ContentFile
from rest_framework import viewsets
from .models import Book
from .serializers import BookSerializer


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def create(self, request, *args, **kwargs):
        data = request.data.get('image')
        filename = request.data.get('file')
        if data:
            header, imgstr = data.split(';base64,')
            ext = header.split('/')[-1]
            request.data['image'] = ContentFile(base64.b64decode(imgstr), name=filename)
        return super(BookViewSet, self).create(request)

    def update(self, request, *args, **kwargs):
        data = request.data.get('image')
        filename = request.data.get('file')
        if data:
            header, imgstr = data.split(';base64,')
            ext = header.split('/')[-1]
            request.data['image'] = ContentFile(base64.b64decode(imgstr), name=filename)
        return super(BookViewSet, self).update(request)

    def partial_update(self, request, *args, **kwargs):
        data = request.data.get('image')
        filename = request.data.get('file')
        if data:
            header, imgstr = data.split(';base64,')
            ext = header.split('/')[-1]
            request.data['image'] = ContentFile(base64.b64decode(imgstr), name=filename)
        return super(BookViewSet, self).partial_update(request)
