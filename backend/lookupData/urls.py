from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('economic_calendar/', views.getEconomicCalendar, name='economic_calendar'),
]