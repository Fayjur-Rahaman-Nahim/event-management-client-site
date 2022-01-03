import { Button, CircularProgress, Container, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Catering = () => {
    const [programs, setPrograms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/api/package/packages')
            .then(res => res.json())
            .then(data => {
                setPrograms(data)
                setIsLoading(false)
            })
    }, []);

    const catering = programs.filter(program => program.categories === 'categories');

    const handleProductBuy = id => {
        navigate(`/placeOrder/${id}`)
    }
    return (
        <div>
            <Container>
                {isLoading && <CircularProgress />}
                <h2>Lets explore products and accessories</h2>
                <Grid sx={{ my: 2 }} container spacing={4}>
                    {
                        programs.map(product => <Grid key={product._id} item xs={12} md={4}>
                            <Paper sx={{ p: 2 }} elevation={3} >
                                <img style={{ width: '100%', height: '200px' }} src={product.image} alt="" />
                                <h2>{product.productName}</h2>
                                <p>{product.description.slice(0, 60)}</p>
                                <h2>price: {product.price}</h2>
                                <Button variant="contained" onClick={() => handleProductBuy(product._id)}>buy now</Button>
                            </Paper>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Catering;