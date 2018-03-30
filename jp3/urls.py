from django.conf.urls import url
from . import views

urlpatterns = [
           url(r'^$', views.jp3_home, name='jp3_home'),
]
