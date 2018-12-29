from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):
    #my_dict = {'insert_me':"hello i am from views.py "}
    my_dict = {'insert_me':"now i am coming form first_app/index.html ! "}
    return render(request,'first_app/index2.html',context=my_dict)
    #return render(request,'first_app/index.html',context=my_dict)
    #return HttpResponse("hello world")
