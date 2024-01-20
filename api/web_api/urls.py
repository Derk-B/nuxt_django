# urls.py
from django.urls import path
from . import views

urlpatterns = [
    # ... your other views
    path('signup/', views.signup, name='register'),
    path('login/', views.login, name='login'),
    path('test-token/', views.test_token, name='refresh-token'),
    path('logout/', views.logout, name='logout'),
]
