from django.urls import path
from . import views

app_name = 'registration'

urlpatterns = [
    path('', views.list_user, name='homepage'),
    path('form/', views.registration_form, name='form'),
    path('form_sql_injection/', views.registration_form_sql_injection, name='form_sql_injection'),
    
]