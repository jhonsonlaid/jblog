from django.shortcuts import render
from django.template import loader,Context
from django.http import HttpResponse
from blog.models import BlogPost
from django.http import Http404

# Create your views here.

def home(request):
    post_list = BlogPost.objects.all()[:5]
    t = loader.get_template('blog/blog-home.html')
    c = Context({'post_list': post_list})
    return HttpResponse(t.render(c))

#category in url while tag in database
def blog_category(request, category):
    category = category.split("+")
    post_list = BlogPost.objects.filter(tag__contains=category[0])
    post_list = post_list.order_by('timestamp')
    post_list = post_list.reverse()
    t = loader.get_template('blog/blog-category.html')
    c = Context({'post_list': post_list})
    return HttpResponse(t.render(c))

def detail(request,category,id):
    try:
        post = BlogPost.objects.filter(tag__contains=category)
        post = post.get(id=str(id))
    except BlogPost.DoesNotExist:
        raise Http404
    return render(request, 'blog/post.html', {'post':post})
