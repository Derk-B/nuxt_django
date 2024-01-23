# urls.py
from django.urls import path
from . import views

urlpatterns = [
    # ... your other views
    path('signup/', views.signup, name='register'),
    path('login/', views.login, name='login'),
    path('test-token/', views.test_token, name='refresh-token'),
    path('logout/', views.logout, name='logout'),
    path('todos/', views.todos, name='todos'),
    path('ping/', views.ping, name='ping'),
    path('update-todo/', views.update_todo, name="update-todo"),
    path('add-todo/', views.add_todo, name="add-todo"),
    path('delete-todo/', views.delete_todo, name="delete-todo"),
]
