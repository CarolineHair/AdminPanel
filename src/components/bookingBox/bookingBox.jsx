import { React } from 'react';
import './bookingBox.scss'

export default function bookingBox({item}) {
    const date = new Date(item.date);

    return (
        <div className="bookingBox">
            <p className='title'>{item.title}</p>
            <p className='name'>{item.name}</p>
            <p className='comment'>{item.comments}</p>
            <p className='date'>{date.getHours()}:{date.getMinutes()} {date.getDay()}/{date.getMonth()+1}/{date.getFullYear()}</p>
        </div>
    )
}