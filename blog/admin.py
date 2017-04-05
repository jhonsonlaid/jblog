from django import forms
from django.contrib import admin
from blog.models import BlogPost, BlogPostAdmin
from markdownx.admin import MarkdownxModelAdmin



#admin.site.register(BlogPost, MarkdownxModelAdmin)
admin.site.register(BlogPost, BlogPostAdmin)

