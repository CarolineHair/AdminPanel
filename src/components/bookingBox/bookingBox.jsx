import { React, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import './bookingBox.scss'

export default function BookingBox({item}) {
    const date = new Date(item.date);

    const [openFin, setOpenFin] = useState();
    const [openCan, setOpenCan] = useState();
    const [openDel, setOpenDel] = useState();

    const don = (id) => {
        setOpenFin(true);
    }
    
    const can = (id) => {
        setOpenCan(true);
    }
    
    const del = (id) => {
        setOpenDel(true);
    }
    
    const handleCloseFin = () => {
        setOpenFin(false);
    }
    
    const handleCloseCan = () => {
        setOpenCan(false);
    }
    
    const handleCloseDel = () => {
        setOpenDel(false);
    }

    const fetchDelete = (id) => {
        fetch(`https://carolinehair.herokuapp.com/delBooking/${id}`)
        .then(handleCloseCan());
        window.location.reload(true);
    }

    const fetchCancel = (id) => {
        fetch(`https://carolinehair.herokuapp.com/cancel/${id}`)
        .then(handleCloseDel());
        window.location.reload(true);
    }

    const fetchFinished = (id) => {
        fetch(`https://carolinehair.herokuapp.com/finished/${id}`)
        .then(handleCloseFin());
        window.location.reload(true);
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
            <Dialog
            open={openDel}
            onClose={handleCloseDel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Er du helt sikker?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Er du helt sikker på du vil slette?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='text' onClick={() => {fetchDelete(item._id)}}>Ja</Button>
                    <Button variant='contained' onClick={handleCloseDel}>Nej</Button>
                </DialogActions>
            </Dialog>
            
            <Dialog
            open={openFin}
            onClose={handleCloseFin}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Er du helt sikker?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Er du helt sikker på du vil færdiggøre?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='text' onClick={() => {fetchFinished(item._id)}}>Ja</Button>
                    <Button variant='contained' onClick={handleCloseFin}>Nej</Button>
                </DialogActions>
            </Dialog>
            
            <Dialog
            open={openCan}
            onClose={handleCloseCan}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Er du helt sikker?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Er du helt sikker på du vil afmelde?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='text' onClick={() => {fetchCancel(item._id)}}>Ja</Button>
                    <Button variant='contained' onClick={handleCloseCan}>Nej</Button>
                </DialogActions>
            </Dialog>
        </div>        
    )
}