from django.urls import path
from . import views

urlpatterns = [
    path("todos/", views.todos, name="todos"),
    path("login/", views.login, name="login"),
    path('user/', views.user, name="user"),
    path("logout/", views.logout, name="logout")
]
