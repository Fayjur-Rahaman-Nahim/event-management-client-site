import { Button, CircularProgress, Container, Grid, Paper } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Appbar from '../../Nahim_components/Appbar/Appbar';
import Footer from '../../Nahim_components/Footer/Footer';

const AllPrograms = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const programsItem = [
        {
            name: 'catering',
            id: 1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0cVT1ogLSe1WkK4vUZVGU6sYx9PI_t6GKw&usqp=CAU'
        },
        {
            name: 'photography',
            id: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqALSt7M5C65BtXwZdWrQDXHR8PfhO5Ldx4Q&usqp=CAU'
        },
        {
            name: 'flower',
            id: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRjTt6N9_A_uQGMYdCMp2PKAmm3lN_kv6NzA&usqp=CAU'
        },
        {
            name: 'lighting',
            id: 4,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6L-SLxcK52wZb3N6twsal_mKgXg7Hif2vVQ&usqp=CAU'
        },
    ]
    const handleProductBuy = name => {
        navigate(`/programs/${name}`)
    }
    return (
        <div>
            <Appbar />
            <Container>
                {/* {isLoading && <CircularProgress />} */}
                <h2>Our programs</h2>
                <Grid sx={{ my: 2 }} container spacing={4}>
                    {
                        programsItem.map(product => <Grid key={product.id} item xs={12} md={6}>
                            <Paper sx={{ p: 2 }} elevation={3} >
                                <img style={{ width: '100%', height: '300px' }} src={product.image} alt="" />
                                <h2>{product.name}</h2>
                                {/* <p>{product.description.slice(0, 60)}</p> */}
                                {/* <h2>price: {product.price}</h2> */}
                                <Button variant="contained" onClick={() => handleProductBuy(product.name)}>check our packages</Button>
                            </Paper>
                        </Grid>)
                    }
                </Grid>
            </Container>
            <Footer />
        </div>
    );
};

export default AllPrograms;