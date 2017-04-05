"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based view
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""

import os
from django.conf.urls import include,url
from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
from blog import views as blog_views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^blog/',include('blog.urls')), 
    url(r'^$', blog_views.home),
    url(r'^markdownx/', include('markdownx.urls')),
]

if settings.DEBUG:
    media_root = os.path.join(settings.BASE_DIR,'media')
    urlpatterns += static('/media/', document_root=media_root)
