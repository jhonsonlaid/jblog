from django import forms
from django.contrib import admin
#from blog.models import BlogPost, BlogPostAdmin
from gallery.models import GalleryPost, GalleryPostAdmin

admin.site.register(GalleryPost, GalleryPostAdmin)
