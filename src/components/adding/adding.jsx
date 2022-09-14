import { React, useState} from 'react'
import {TextField} from '@mui/material'
import './adding.scss'
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';

export default function Adding() {
    const [value, setValue] = useState();
  return (
    <div className='Adding'>
        <div className='box'>
            <h1>Tilføj tid:</h1>
            <TextField label="titel"></TextField>
            <LocalizationProvider>
                <DateTimePicker 
                    label="Date&Time picker"

                />
            </LocalizationProvider>
        </div>
    </div>
  )
}
