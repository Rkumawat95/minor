"""minor URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from core import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='home'),
    path('about/', views.about, name='about'),
    path('base/', views.course, name='course'),
    path('contact/', views.contact, name='contact'),
    path('profile/',views.profile,name='profile'),
    path('Eprofile/',views.Eprofile,name='Eprofile'),
    path('signup/', views.handleSignup, name='Signup'),
    path('login/', views.handlelogin, name='login'),
    path('logout/', views.handlelogout, name='logout'),
    path('upscc/',views.upscc,name='upscc'),
    path('upsch/',views.upsch,name='upsch'),
    path('jeem/',views.jeem,name='jeem'),
    path('jeep/',views.jeep,name='jeep'),
    path('jeec/',views.jeec,name='jeec'),
    path('Neetb/',views.Neetb,name='Neetb'),
    path('Neetp/',views.Neetp,name='Neetp'),
    path('Neetc/',views.Neetc,name='Neetc'),
    path('mppatb/',views.mppatb,name='mppatb'),
    path('mppatm/',views.mppatm,name='mppatm'),
    path('mppatp/',views.mppatp,name='mppatp'),
    path('mppatc/',views.mppatc,name='mppatc'),
    path('current/',views.current,name='current'),
    path('history/',views.history,name='history'),
    path('math/',views.math,name='math'),
    path('physics/',views.physics,name='physics'),
    path('chemistry/',views.chemistry,name='chemistry'),
    path('physics2/',views.physics2,name='physics2'),
    path('chemistry2/',views.chemistry2,name='chemistry2'),
    path('plant/',views.plant,name='plant'),
    path('human/',views.human,name='human'),
    path('diversity/',views.diversity,name='diversity'),
]
