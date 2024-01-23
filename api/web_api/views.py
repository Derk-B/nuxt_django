# views.py
from rest_framework import status
from rest_framework.response import Response
from .serializers import UserSerializer, TodoSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import Todo

@api_view(["GET"])
def ping(request):
    return Response("Pong")

@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, username=request.data['username'])
    if not user.check_password(request.data['password']):
        return Response({"detail": "not found"}, status=status.HTTP_404_NOT_FOUND)
    
    token, _ = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(instance=user)
    return Response({"token": token.key, "user": serializer.data})

@api_view(["POST"])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(username=request.data['username'])
        user.set_password(request.data['password'])
        user.save()
        token = Token.objects.create(user=user)

        return Response({"token": token.key, "user": serializer.data})

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def logout(request):
    request.user.auth_token.delete()
    return Response("logout success")

@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):
    return Response("passed for {}".format(request.user.email))

@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def todos(request):
    todos = Todo.objects.filter(author=request.user).all()
    data = TodoSerializer(todos, many=True).data
    return Response(data)

@api_view(['POST'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def update_todo(request):
    serializer = TodoSerializer(data=request.data)

    if serializer.is_valid():
        Todo.objects.filter(id=request.data["id"]).update(**serializer.data)
        return Response("Updated")
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def add_todo(request):
    title = request.data["title"]
    description = request.data["description"]

    if title == None or description == None:
        return Response("Title or description not supplied", status=status.HTTP_400_BAD_REQUEST)
    
    todo = Todo(title=request.data["title"], description=request.data["description"], author=request.user)

    todo.save()

    return Response("Todo added")
    
   

@api_view(["POST"])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def delete_todo(request):
    todo = Todo.objects.get(id=request.data["id"])

    if todo != None:
        Todo.delete(todo)
        return Response("Deleted todo")
    
    return Response("", status=status.HTTP_400_BAD_REQUEST)
    