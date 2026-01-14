from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("welcome to the django")


def january(request):
    return HttpResponse("january challenge : excited daily !")

def february(request):
    return HttpResponse("februrayr challenge : ready a book")