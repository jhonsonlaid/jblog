from __future__ import unicode_literals

from django.db import models
from django.contrib import admin
from markdownx.models import MarkdownxField
from markdownx.widgets import AdminMarkdownxWidget
import datetime
from django.utils.encoding import python_2_unicode_compatible

# Create your models here.
@python_2_unicode_compatible
class BlogPost(models.Model):
    title = models.CharField(max_length=150)
    tag = models.CharField(max_length=30, default="python")
    content = MarkdownxField()
    timestamp = models.DateField(default=datetime.datetime.today())
    id = models.AutoField(primary_key=True)

    def __str__(self):
        return self.title

class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'timestamp')
    search_fields = ('tag', 'timestamp')


#admin.site.register(BlogPost, BlogPostAdmin)
