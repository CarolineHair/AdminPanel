import React from 'react'
import './mainPage.scss'
import Bookings from '../bookings/bookings'

export default function MainPage() {
  return (
    <div className='MainPage'>
        <div className='flexBox'>
            <div className='left'>
                <h1>lorem</h1>
            </div>
            <div className='right'>
                <Bookings />
            </div>
        </div>
    </div>
  )
}
