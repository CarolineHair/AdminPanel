import { React } from 'react';
import { Button } from '@mui/material';
import './bookingBox.scss'

export default function bookingBox({item}) {
    const date = new Date(item.date);

    const don = (id) => {
        alert('pressed done!');
    }
    const can = (id) => {
        alert('pressed cancel !');
    }
    const del = (id) => {
        alert('pressed delete!');
    }

    return (
        <div className="bookingBox">
            <div className='box'>
                <div className='left'>
                    <p className='title'>{item.title}</p>
                    <p className='name'>{item.name}</p>
                    <p className='comment'>{item.comments}</p>
                    <p className='date'>{date.getHours()}:{date.getMinutes()} {date.getDay()}/{date.getMonth()+1}/{date.getFullYear()}</p>
                </div>
                <div className='right'>
                    <Button variant='contained' className='done' onClick={() => {don(item._id)}}>Færdig</Button>
                    <Button variant='contained' className='cancel' onClick={() => {can(item._id)}}>Afmeld</Button>
                    <Button variant='contained' className='delete' onClick={() => {del(item._id)}}>Slet</Button>
                </div>
            </div>
        </div>
    )
}