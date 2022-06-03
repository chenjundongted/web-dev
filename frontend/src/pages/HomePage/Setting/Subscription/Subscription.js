import React, { useState } from 'react'
import './Subscription.css'
import { Card, Avatar, Button } from 'antd'
const { Meta } = Card

const Subscription = () => {

  // Switching monthly & quarterly
  let [firstState, setFirstState] = useState(false)
  let [secondState, setSecondState] = useState(false)
  let [thirdState, setThirdState] = useState(false)
  let [fourthState, setFourthState] = useState(false)

  const switchToQuarterly = (e) => {
    console.log(e.currentTarget.id)
    let id = e.currentTarget.id
    if (id === 'first') {
      setFirstState(true)
    } else if (id === 'second') {
      setSecondState(true)
    } else if (id === 'third') {
      setThirdState(true)
    } else {
      setFourthState(true)
    }
  }

  const switchToMonthly = (e) => {
    console.log(e.currentTarget.id)
    let id = e.currentTarget.id
    if (id === 'first') {
      setFirstState(false)
    } else if (id === 'second') {
      setSecondState(false)
    } else if (id === 'third') {
      setThirdState(false)
    } else {
      setFourthState(false)
    }
  }


  return (
    <div className='container'>

        <div className='container-column'>
            <div className='container-content'>
                <Card 
                    cover = {<img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'/>}
                    actions = {[
                        <Button className='botton-first' id='first' onClick={ switchToMonthly }>Monthly</Button>,
                        <Button id='first' onClick={ switchToQuarterly }>Quarterly</Button>,
                    ]}>
                        <Meta
                            avatar = {<Avatar src = 'https://joeschmoe.io/api/v1/random' />}
                            title = 'Starter'
                            description = 'This is the description'
                        />
                </Card>
                {firstState ? <a>quarterly</a> : <a>monthly</a>}
            </div>
            <Button>Confirm</Button>
        </div>

        <div className='container-column'>
            <div className='container-content'>
                <Card 
                    cover = {<img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'/>}
                    actions = {[
                        <Button id='second' onClick={ switchToMonthly }>Monthly</Button>,
                        <Button id='second' onClick={ switchToQuarterly }>Quarterly</Button>,
                    ]}
                    >
                        <Meta
                            avatar = {<Avatar src = 'https://joeschmoe.io/api/v1/random' />}
                            title = 'Pro'
                            description = 'This is the description'
                        />
                </Card>
                {secondState ? <a>quarterly</a> : <a>monthly</a>}
            </div>
            <Button>Confirm</Button>
        </div>

        <div className='container-column'>
            <div className='container-content'>
                <Card 
                    cover = {<img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'/>}
                    actions = {[
                        <Button id='third' onClick={ switchToMonthly }>Monthly</Button>,
                        <Button id='third' onClick={ switchToQuarterly }>Quarterly</Button>,
                    ]}>
                        <Meta
                            avatar = {<Avatar src = 'https://joeschmoe.io/api/v1/random' />}
                            title = 'Premium'
                            description = 'This is the description'
                        />
                </Card>
                {thirdState ? <a>quarterly</a> : <a>monthly</a>}
            </div>
            <Button>Confirm</Button>
        </div>

        <div className='container-column'>
            <div className='container-content'>
                <Card 
                    cover = {<img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'/>}
                    actions = {[
                        <Button id='fourth' onClick={ switchToMonthly }>Monthly</Button>,
                        <Button id='fourth' onClick={ switchToQuarterly }>Quarterly</Button>,
                    ]}>
                        <Meta
                            avatar = {<Avatar src = 'https://joeschmoe.io/api/v1/random' />}
                            title = 'Diamond VIP'
                            description = 'This is the description'
                        />
                </Card>
                {fourthState ? <a>quarterly</a> : <a>monthly</a>}
            </div>
            <Button>Confirm</Button>
        </div>

    </div>
  )
}

export default Subscription