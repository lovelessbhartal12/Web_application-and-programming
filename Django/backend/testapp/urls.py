from django.urls import path
from . import views

urlpatterns = [
    path('' , views.index ),
    path('january/', views.index ),
    path('february/', views.index)

]
