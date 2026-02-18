from  django.urls import path
from .views import DashboardAPIView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from . import views
urlpatterns = [
    # path("" , views.index),
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("dashboard/", DashboardAPIView.as_view(), name="dashboard"),
]
