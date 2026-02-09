from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from django.contrib.auth.hashers import check_password

from .models import Student

def student_login(request):
    if request.method=="POST":
        username=request.POST.get("username")
        print(username)
        password=request.POST.get("password")
        print(username,password)

        try:
            student=Student.objects.get(username=username)
            if check_password(password, student.password):
                request.session['student_id']=student.id
                request.session['student_name']=student.name
                return redirect('student_dashboard')
            else:
                
                return render(request , 'session/login.html' , {"error": "Invalid password"})

        except:
            
            return render(request , 'session/login.html' , {"error": "Ivalid username or password"})
    return render(request , 'session/login.html')
def student_dashboard(request):
    if 'student_id' not in request.session:
        return redirect('student_login')
    
    name=request.session.get('student_name')
    return render(request , 'session/dashboard.html',{"name":name})

def student_logout(request):
    request.session.flush()
    return redirect('student_login')
    # return render(request , 'session/dashboard.html')