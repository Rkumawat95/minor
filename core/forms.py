from django import forms
from django.contrib.auth.forms import UserCreationForm,UserChangeForm
from django.contrib.auth.models import User

class UserForm(UserCreationForm):
    password2 = forms.CharField(label='Confirm Password(again)', widget=forms.PasswordInput)
    class Meta:
        model = User
        fields = ['username', 'first_name','last_name','email', 'password1', 'password2']

class profileForm(UserChangeForm):
    password = None
    class Meta:
        model = User
        fields = ['username','first_name', 'last_name', 'email','date_joined','last_login']