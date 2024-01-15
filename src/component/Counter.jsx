import React, { useState } from 'react'
import { Box, Button, Container, Grid, Stack } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






export default function Counter() {
    let [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount(++count);
    }

    const handleDecrement = () => {
        setCount(--count);

    }
    const handleDecrementDisabled = () => {
        if (count === 0) {
            toast.error('Cannot go below zero!', { position: 'top-center', toastId: 'customErrorToast',autoClose: 2000 });
        }
    }

    return (
        < Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} >
            <Box >
                <Grid container sx={{ width: '400px', border: '1px solid black', boxShadow: 'black' }} direction={'column'}>
                    <Grid item sx={{ backgroundColor: '#ffffff', p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                        <h1 style={{ fontSize: '50px' }}>{count}</h1>

                    </Grid>
                    <Grid item sx={{ backgroundColor: '#5a5a5a',borderTop: '1px solid black', p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Stack spacing={2} direction={'row'}>
                            <Button size="large" color='error' variant='contained' sx={{ fontSize: '20px' }} onClick={() => setCount(0)}>reset</Button>
                            <div onClick={handleDecrementDisabled}>
                                <Button size="large" color='info' variant='contained' sx={{ fontSize: '20px' }} onClick={handleDecrement} disabled={count === 0}  >-</Button>
                            </div>
                            <Button size="large" variant='contained' sx={{ fontSize: '20px' }} onClick={handleIncrement}>+</Button>
                        </Stack>
                    </Grid>

                </Grid>
            </Box>
            <ToastContainer />
        </Container >

    )
}
