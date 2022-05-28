import React, { useEffect, useState } from 'react'
import './EconomicCalendar.css'
import 'antd/dist/antd.css'
import { Table } from 'antd'

const EconomicCalendar = () => {

  let [economicCalendar, setEconomicCalendar] = useState([])

  let getData = async () => {
    let response = await fetch(`http://localhost:8000/lookup/economic_calendar/`)
    let data = await response.json()
    setEconomicCalendar(data)
  }

  useEffect(() => {

    getData()

  }, []);

  return (
    <div className='content-layout'>
      <Table className='table'
            scroll={{ y: 600 }}
           
            columns = {[
                  {
                    title: 'Date',
                    dataIndex: 'date',
                    key: 'date',
                    
                  },
                  {
                    title: 'Time',
                    dataIndex: 'time',
                    key: 'time',
                  },
                  {
                    title: 'Event',
                    dataIndex: 'event',
                    key: 'event',
                  },
                  {
                    title: 'Importance',
                    dataIndex: 'importance',
                    key: 'importance',
                  },
                  {
                    title: 'Forecast',
                    dataIndex: 'forecast',
                    key: 'forecast',
                  },
                  {
                    title: 'Actual',
                    dataIndex: 'actual',
                    key: 'actual',
                  },
                  {
                    title: 'Previous',
                    dataIndex: 'previous',
                    key: 'previous',
                  },
            ]} 
            dataSource = {economicCalendar}

        />

    </div>
  )
}

export default EconomicCalendar