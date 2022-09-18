import { React, useState} from 'react'
import {Button, TextField} from '@mui/material'
import './adding.scss'
import dayjs from 'dayjs';
import DateTimePicker from 'react-datetime-picker';


export default function Adding() {
    const [value, setValue] = useState(new Date());
    const [name, setName] = useState();

    const fetchAddTime = (name, value) => {
        fetch(`https://carolinehair.herokuapp.com/addTime/${name}/${value}`)
    };
  return (
    <div className='Adding'>
        <div className='box'>
            <h1>Tilføj tid:</h1>
            <TextField label="titel" className='TextField' onChange={setName}></TextField>
            <br />
            <DateTimePicker onChange={setValue} format='HH:mm dd-MM-y' value={value} className='TimePicker' />
            <br />
            <Button variant='contained' size='large' className="submitButton" onClick={() => {fetchAddTime(name.target.value, value.getTime())}}>Tilføj tid</Button>
        </div>
    </div>
  )
}
