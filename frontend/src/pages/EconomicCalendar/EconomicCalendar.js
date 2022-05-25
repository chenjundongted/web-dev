import React, { useEffect, useState } from 'react'
import './EconomicCalendar.css'

const EconomicCalendar = () => {

  let [economicCalendar, setEconomicCalendar] = useState([])

  let getDataFromBackend = async () => {
    let response = await fetch(`/lookup/economic_calendar/`)
    let data = await response.json()
    setEconomicCalendar(data)
  }

  useEffect(() => {
      getDataFromBackend()
      console.log(economicCalendar)
  }, [economicCalendar])

  return (
    <div className='content-layout'>Economic</div>
  )
}

export default EconomicCalendar