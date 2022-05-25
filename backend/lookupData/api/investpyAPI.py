import investpy
from datetime import date
from dateutil.relativedelta import relativedelta
import json

def getEconomicCalendarFromInvestpyAPI(months):
    now = date.today()
    future = (now + relativedelta(months=months)).strftime('%d/%m/%Y')
    r = investpy.economic_calendar(countries=['united states'], from_date=now.strftime('%d/%m/%Y'), to_date=future)
    js = r.to_json(orient='records')
    data = json.loads(js)
    return data

