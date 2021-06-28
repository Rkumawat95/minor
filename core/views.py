from django.shortcuts import render, HttpResponseRedirect, redirect
from core.models import Contact
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from .forms import UserForm,profileForm
from django.contrib.auth.forms import AuthenticationForm,PasswordChangeForm

# Create your views here.
def index(request):
    return render(request, 'index.html')

def course(request):
    if request.user.is_authenticated:
        return render(request, 'course.html')
    else:
        return redirect('login')

def about(request):
    return render(request, 'about.html')

def profile(request):
    if request.user.is_authenticated:
        return render(request, 'profile.html')
    else:
        return redirect('login')

def Eprofile(request):
    if request.method=="POST":
        fm = profileForm(request.POST,instance=request.user)
        if fm.is_valid():
            fm.save()
    else:
        fm = profileForm(instance=request.user)
    return render(request, 'Eprofile.html',{'name':request.user.username,'form':fm})

def contact(request):
   if request.method=='POST':
      name = request.POST['name']
      email = request.POST['email']
      phone = request.POST['phone']
      content = request.POST['content']

      if len(name)<2 or len(email)<3 or len(phone)<10 or len(content)<4:
         messages.error(request, "Please fill the form correctly")
      else:
         contact = Contact(name=name, email=email, phone=phone, content=content)
         contact.save()
         messages.success(request, "Your message has been successfully sent")
   return render(request,'contact.html')

def handleSignup(request):
    if request.method == "POST":
        form = UserForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f"New account created: {username}") 
            return redirect('login')
        else:
            for msg in form.error_messages:
                messages.error(request, f"{msg}: {form.error_messages[msg]}")
            return render(request = request, template_name = "signup.html", context={"form":form})
    form = UserForm
    return render(request = request,template_name = "signup.html", context={"form":form})


def handlelogin(request):
    if request.method == 'POST':
        form = AuthenticationForm(request=request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.info(request, f"You are now logged in as {username}")
                return redirect('home')
            else:
                messages.error(request, "Invalid username or password.")
        else:
            messages.error(request, "Invalid username or password.")
    form = AuthenticationForm()
    return render(request = request,template_name = "login.html",context={"form":form})

def handlelogout(request):
         logout(request)
         messages.success(request, " Successfully Logged Out")
         return redirect('home')

def upscc(request):
    return render(request, 'upscc.html')

def upsch(request):
    return render(request, 'upsch.html')
    
def jeem(request):
    return render(request, 'jeem.html')

def jeep(request):
    return render(request, 'jeep.html')

def jeec(request):
    return render(request, 'jeec.html')

def Neetb(request):
    return render(request, 'Neetb.html')

def Neetp(request):
    return render(request, 'Neetp.html')

def Neetc(request):
    return render(request, 'Neetc.html')

def mppatb(request):
    return render(request, 'mppatb.html')

def mppatm(request):
    return render(request, 'mppatm.html')

def mppatp(request):
    return render(request, 'mppatp.html')

def mppatc(request):
    return render(request, 'mppatc.html')

def current(request):
    return render(request, 'current_affair1.html')

def history(request):
    return render(request, 'history1.html')

def math(request):
    return render(request, 'math1.html')

def physics(request):
    return render(request, 'physics1.html')

def chemistry(request):
    return render(request, 'chemistry1.html')

def physics2(request):
    return render(request, 'physics2.html')

def chemistry2(request):
    return render(request, 'chemistry2.html')  

def plant(request):
    return render(request, 'plant.html')

def human(request):
    return render(request, 'human.html')

def diversity(request):
    return render(request, 'diversity.html')