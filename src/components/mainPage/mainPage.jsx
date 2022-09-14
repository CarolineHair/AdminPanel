import React from 'react'
import './mainPage.scss'
import Bookings from '../bookings/bookings'
import Adding from '../adding/adding'

export default function MainPage() {
  return (
    <div className='MainPage'>
        <div className='flexBox'>
            <div className='left'>
                <Adding />
            </div>
            <div className='right'>
                <Bookings />
            </div>
        </div>
    </div>
  )
}
