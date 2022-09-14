import {React, useEffect, useState} from 'react'
import BookingBox from '../bookingBox/bookingBox';
import './bookings.scss'

export default function Bookings() {
  var [bookings, setBookings] = useState();
  useEffect(() => {
    if(bookings !== undefined) return;
    fetch('https://carolinehair.herokuapp.com/getBookings')
    .then(response => response.json())
    .then(json => setBookings(json));
    });

  return (
    <div className='bookings'>
      <h1>Bookinger:</h1>
        <div className='bookingList'>
          {bookings ? bookings.map((item, index) => (
            <BookingBox item={item} className='BookingBox' />
          )) : <h1>Loading...</h1>}
        </div>
    </div>
  )
}
