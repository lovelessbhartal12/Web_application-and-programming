from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages
from django.contrib.auth.hashers import make_password
from .forms import RegistrationForm
from .models import Registration
from django.db import connection

def list_user(request):
    user=Registration.objects.all()
    user_input="<script>alert(`you are hacked . stealing cookies. ${document.cookie}`)</script>"


    return render(request, 'registration/index.html', {"user":user, "user_input": user_input})
@csrf_exempt
def registration_form_sql_injection(request):
    """Handle registration form display and submission"""
    if request.method == 'POST':
        form = RegistrationForm(request.POST)

        if form.is_valid():
            data=form.cleaned_data
            hashpass=make_password(data['password'])
            with connection.cursor() as cursor:
                cursor.executescript(f"INSERT INTO registration_registration (name, email, password) VALUES ('{data['name']}', '{data['email']}', '{hashpass}')")
            print("sucess")
            return redirect('registration:form')
    else:
        form = RegistrationForm()

    return render(request, 'registration/form.html', {'form': RegistrationForm(), "success": "Registration successful!"})

def registration_form(request):
    """Handle registration form display and submission"""
    if request.method == 'POST':
        form = RegistrationForm(request.POST)

        if form.is_valid():
            data=form.cleaned_data
            hashpass=make_password(data['password'])
            regstration=Registration(name=data['name'] ,email=data['email'],password=hashpass)
            regstration.save()
            print("sucess")
            return redirect('registration:form')
    else:
        form = RegistrationForm()

    return render(request, 'registration/form.html', {'form': RegistrationForm(), "success": "Registration successful!"})