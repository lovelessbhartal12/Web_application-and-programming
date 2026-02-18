from rest_framework.views import APIView
from rest_framework.response import Response    
from rest_framework.permissions import IsAuthenticated

class DashboardAPIView(APIView):
    """Protected dashboard - Requires JWT token"""
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            'message': f'Welcome {request.user.username}!'
            # 'user': {
            #     'id': request.user.id,
            #     'username': request.user.username,
            #     'email': request.user.email,
            #     'first_name': request.user.first_name,
            #     'last_name': request.user.last_name,
            # }
        })