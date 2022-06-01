import React, { useState } from 'react'

const RelatedNews = () => {

  let [symbol, setSymbol] = useState([])

  const setSessionStorage = () => {
    if (symbol.length) {
      sessionStorage.setItem('symbol', symbol)
    }
  }


  return (
    <div>RelatedNews</div>
  )
}

export default RelatedNews