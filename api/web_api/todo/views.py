from django.http import HttpResponse
from django.views.decorators.http import require_http_methods
from urllib.parse import parse_qs
from django.contrib.auth import logout as user_logout
from django.contrib.auth import authenticate, login as user_login
from django.views.decorators.csrf import csrf_exempt
from .models import TODO
from django.core import serializers

@require_http_methods(["GET"])
def todos(request):
    if request.user.is_authenticated:
        todos = TODO.objects.filter(author=request.user).all()
        return HttpResponse(serializers.serialize('json', todos))
    
    return HttpResponse("Not authenticated", status=401)

@csrf_exempt
def login(request):
    data = parse_qs(request.body.decode("utf-8"))
    username = data.get("username", [])[0]
    password = data.get("password", [])[0]
    user = authenticate(username=username, password=password)
    if user is not None:
        user_login(request, user)
        return HttpResponse("Success")
    else:
        return HttpResponse("Fail")

def logout(request):
    if request.user.is_authenticated:
        user_logout(request)
    return HttpResponse("success")