from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.response import Response
from .serializers import RegistrationSerializer
from .models import Registration


class RegistrationListAPIView(APIView):
    """Handle registration API - List all or Create new"""
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def get(self, request):
        registrations = Registration.objects.all()
        serializer = RegistrationSerializer(registrations, many=True)
        return Response(serializer.data)
    