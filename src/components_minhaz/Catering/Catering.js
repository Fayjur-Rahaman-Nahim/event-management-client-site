import { Button, CircularProgress, Container, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Catering = () => {
    const [packages, setPackages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const userInfo = window.localStorage.getItem('userInfo') && JSON.parse(window.localStorage.getItem('userInfo'));
    const navigate = useNavigate();
    const { name } = useParams();
    // console.log(name);
    useEffect(() => {
        fetch('http://localhost:5000/api/package/packages', {
            methods: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${userInfo.token}` //ei token ta local storage te store kora ache sekhan theke niben
            }
        })
            .then(res => res.json())
            .then(data => {

                setPackages(data)
                setIsLoading(false)
            })
    }, []);
    console.log(packages);


    const catering = packages.filter(program => program.categories == `${name}`);
    // program.categories == `${name}  `
    console.log(catering)

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
                        packages.map(product => <Grid key={product._id} item xs={12} md={4}>
                            <Paper sx={{ p: 2 }} elevation={3} >
                                <img style={{ width: '100%', height: '200px' }} src={product.image_link} alt="" />
                                <h2>{product.package_name}</h2>
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