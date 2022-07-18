import React from 'react'
import './RelatedNews.css'

import logo from '../../../../icons/header/slack.png';
import search from '../../../../icons/header/search.png';
import bell from '../../../../icons/header/bell.png';
import settings from '../../../../icons/header/settings.png';
import logout from '../../../../icons/header/logout.png';
import support from '../../../../icons/header/support.png';

const RelatedNews = () => {

  return (
    <div className='header'>
      <div className='left-flex'>
        <img className='logo' src={logo}/>
      </div>
      <div className='middle-flex'>
        <input className='search-bar' placeholder='Symbol: AAPL' type="text"></input>
        <button className='search-btn'>
          <img className='search-img' src={search} alt="search"/>
        </button>
      </div>
      <div className='right-flex'>
        <button className='right-flex-btn1'>
          <img className='right-flex-img' src={settings} alt="settings"/>
        </button>
        <button className='right-flex-btn3'>
          <img className='right-flex-img' src={support} alt="support"/>
        </button>
        <button className='right-flex-btn3'>
          <img className='right-flex-img' src={bell} alt="bell"/>
        </button>
        <button className='right-flex-btn4'>
          <img className='right-flex-img' src={logout} alt="logout"/>
        </button>
      </div>
    </div>
  )
}

export default RelatedNews