from django.conf.urls import url
from . import views

urlpatterns =[
           url(r'^$', views.home, name='home'),
           url(r'^(?P<category>[\w\-\&]+)/$', views.blog_category, name='category'),
           url(r'^(?P<category>[\w\-\&]*)/(?P<id>\d+)/$', views.detail, name='detail'),
] 
