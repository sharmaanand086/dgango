from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):
    return HttpResponse("<em>My Sec Project<em>")
def help(request):
    helpdict = {'help_insert':"HELP PAGE"}
    return render(request,'AppTwo\help.html',context=helpdict)
