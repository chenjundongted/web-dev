import requests

api_key = '3UyFGzf0pj6LALE6eLtomJF4wB0PtvNj'

def getNewsFromPolygonAPI(symbol):
    url = f'https://api.polygon.io/v2/reference/news?ticker={symbol}&order=desc&limit=25&apiKey={api_key}'
    r = requests.get(url)
    data = r.json()
    return data
