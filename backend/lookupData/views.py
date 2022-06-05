from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .api import investpyAPI, polygonAPI

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': 'lookup/economic_calendar/',
            'method': 'GET',
        },
        {
            'Endpoint': 'lookup/news/:symbol/',
            'method': 'GET',
        }
    ]
    return Response(routes)

@api_view(['GET'])
def getEconomicCalendar(request):
    economicCalendar = investpyAPI.getEconomicCalendarFromInvestpyAPI(months=12)
    return Response(economicCalendar)


@api_view(['GET'])
def getIndividualNews(request, pk):
    news = polygonAPI.getNewsFromPolygonAPI(symbol=pk)
    return Response(news)