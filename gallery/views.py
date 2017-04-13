from django.shortcuts import render
from django.template import loader, Context
from django.http import HttpResponse
from gallery.models import GalleryPost
from django.http import Http404
import re

# Create your views here.
def gallery_home(request):
	post_list = GalleryPost.objects.all()
	post_covers = []

	for post in post_list:
		cover = {}
		cover['cover'] = post.content.split('\n')[0]
		cover['short_title'] = post.title[:10]+"... "
		cover['title'] = post.title
		cover['timestamp'] = post.timestamp
		cover['id'] = post.id

		img_list = [] 
		for img_content in post.content.split('\n'):
			img_info = {}
			img_info['path'] = img_content
			disc = re.match(r'!\[.*\]', img_content)
			img_info['disc'] = disc.group()[2:-1]
			img_list.append(img_info)
		cover['img'] = img_list

		post_covers.append(cover) 

	t = loader.get_template('gallery_base.html')
	c = Context({'post_list': post_list, 'post_covers':post_covers})
	return HttpResponse(t.render(c))
