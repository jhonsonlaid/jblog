from __future__ import unicode_literals

from django.db import models
from django.contrib import admin
from markdownx.models import MarkdownxField
import django.utils.timezone as timezone
from django.utils.encoding import python_2_unicode_compatible


@python_2_unicode_compatible
class GalleryPost(models.Model):
    title = models.TextField()
    content = MarkdownxField()
    timestamp = models.DateField(default=timezone.now)
    id = models.AutoField(primary_key=True)

    def __str__(self):
        return self.title


class GalleryPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'timestamp')

# Create your models here.
