import React, { useState, useEffect } from 'react'
import { Statistic, Input, Space, Table } from 'antd';
import 'antd/dist/antd.min.css'
import './RelatedNews.css'

const { Search } = Input


const RelatedNews = () => {

  let [symbol, setSymbol] = useState([])
  let [companyName, setCompanyName] = useState('company name')

  let [news, setNews] = useState([])

  const setSessionStorage = (value) => {
  
      sessionStorage.setItem('symbol', value)
      sessionStorage.setItem('companyName', companyName)
    
  }

  // Search
  const onSearch = (value) => {
    let val = value.toUpperCase()
    setSymbol(val)
    setSessionStorage(val)
    getNews(val)
  }

  // Header
  const extraContent = (

      <div style = {{display: 'flex', width: 'max-content', justifyContent: 'flex-end', marginTop: '15px'}}>
        <Statistic title = 'Status' value = 'Pending' style = {{marginRight: 32, }} />
        <Statistic title = 'Price' prefix = '$' value = {568.08} />
      </div>
  )

  // Retrieve News
  const getNews = async (symbol) => {
    let response = await fetch(`http://localhost:8000/lookup/news/${symbol}/`)
    let data = await response.json()
    setNews(data.results)
  }

  const Content = ({ children, extra }) => (
    <div className = 'content'>
      <div className = 'main'>{children}</div>
      <div className = 'extra'>{extra}</div>
    </div>
  )

  useEffect(() => {
    if (sessionStorage.getItem('symbol') !== null && sessionStorage.getItem('companyName') !== null) {
      setSymbol(sessionStorage.getItem('symbol'))
      setCompanyName(sessionStorage.getItem('companyName'))
      getNews(sessionStorage.getItem('symbol'))
    }
  }, [])

  return (
    <div className = 'content-layout'>

      <div className = 'search-bar'>
        <Space direction = 'vertical'>
          <Search placeholder = 'input search text' allowClear enterButton = 'Search' size = 'large' onSearch = {onSearch}/>
        </Space>
      </div>
      
      {symbol.length !==0 &&
        <Table
          style = {{marginTop: 70}} 
          className='table' 
          scroll={{ y: 600 }}
          columns = {[
            {
              title: 'Title',
              dataIndex: 'title',
              key: 'title',
              
            },
            {
              title: 'Article_URL',
              dataIndex: 'article_url',
              key: 'article_url',
              render: (value) => {
                return (
                  <a
                    onClick={(event) => event.stopPropagation()}
                    href={value}
                    target="_blank"
                    >{value}</a>
                );
              }
            },
            {
              title: 'Publisher',
              dataIndex: ['publisher', 'name'],
              key: 'publisher',
            },
            {
              title: 'Related_Tickers',
              dataIndex: 'tickers',
              key: 'tickers',
            },
            {
              title: 'Published_UTC',
              dataIndex: 'published_utc',
              key: 'published_utc',
            },
          ]} 
          dataSource = {news}/>
      }
    </div>
  )
}

export default RelatedNews