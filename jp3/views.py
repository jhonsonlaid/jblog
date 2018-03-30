from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def jp3_home(request):

    html_addr = 'jp3_cheer.html'

    return render(request, html_addr)
