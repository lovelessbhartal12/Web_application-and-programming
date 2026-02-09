from django import forms
from django.core.validators import RegexValidator
from django.utils import timezone
from .models import Registration
import re


class RegistrationForm(forms.Form):
        name = forms.CharField(
        max_length=100,
        # error_messages={'required': 'Name is required'}
    )
        
        email = forms.EmailField(
        error_messages={
            'required': 'Email is required',
            'invalid': 'Please enter a valid email'
        }
    )
        password = forms.CharField(
        widget=forms.PasswordInput,
        error_messages={'required': 'Password is required'}
    )
        def clean_password(self):
          password = self.cleaned_data.get('password')
        # At least 8 chars, 1 uppercase, 1 lowercase, 1 digit, 1 symbol
       
          if not len(password) >= 8:
            raise forms.ValidationError(
                'Password must be at least 8 characters long and include '
                'one uppercase letter, one lowercase letter, one number, '
                'and one symbol'
            )
          return password

