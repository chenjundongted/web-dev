import React, { useState, useEffect } from 'react'
import { PageHeader, Button, Statistic, Descriptions, Input, Space } from 'antd';
import './RelatedNews.css'

const { Search } = Input


const RelatedNews = () => {

  let [symbol, setSymbol] = useState([])
  let [companyName, setCompanyName] = useState('company name')

  const setSessionStorage = () => {
    console.log('symbol', symbol)
    if (symbol.length) {
      sessionStorage.setItem('symbol', symbol)
      sessionStorage.setItem('companyName', companyName)
      console.log(1)
      console.log(sessionStorage)
    }
  }

  // Search
  const onSearch = (value) => {
    setSymbol(value)
    setSessionStorage()
  }

  // Header
  const extraContent = (

      <div style = {{display: 'flex', width: 'max-content', justifyContent: 'flex-end', marginTop: '15px'}}>
        <Statistic title = 'Status' value = 'Pending' style = {{marginRight: 32, }} />
        <Statistic title = 'Price' prefix = '$' value = {568.08} />
      </div>

  )

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
    }
    console.log(symbol)
  }, [])

  return (
    <div className = 'content-layout'>

      <div className = 'search-bar'>
        <Space direction = 'vertical'>
          <Search placeholder = 'input search text' allowClear enterButton = 'Search' size = 'large' onSearch = {onSearch}/>
        </Space>
      </div>
      
      {symbol.length !==0 &&
        <PageHeader
          className = 'site-page-header'
          title = {symbol}
          subTitle = {companyName}
          extra = {[
            <Button key = '1' type = 'primary'>First</Button>,
            <Button key = '2'>Second</Button>,
            <Button key = '3'>Third</Button>,
          ]}>
          <Content>{extraContent}</Content>
        </PageHeader>
      }

    </div>
  )
}

export default RelatedNews