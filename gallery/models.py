from __future__ import unicode_literals

from django.db import models
from django.contrib import admin
from markdownx.models import MarkdownxField
from markdownx.widgets import AdminMarkdownxWidget
import datetime
from django.utils.encoding import python_2_unicode_compatible

@python_2_unicode_compatible
class GalleryPost(models.Model):
	title = models.CharField(max_length=150)
	content = MarkdownxField()
	timestamp = models.DateField()

	def __str__(self):
		return self.title

class GalleryPostAdmin(admin.ModelAdmin):
	list_display = ('title', 'timestamp')

# Create your models here.
