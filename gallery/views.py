from django.shortcuts import render
from django.template import loader, Context
from django.http import HttpResponse
from gallery.models import GalleryPost
from django.http import Http404

# Create your views here.
def gallery_home(request):
	post_list = GalleryPost.objects.all()
	t = loader.get_template('gallery_base.html')
	c = Context({'post_list': post_list})
	return HttpResponse(t.render(c))

