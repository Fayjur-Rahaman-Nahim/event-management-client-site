import { Button, CircularProgress, Container, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Catering = () => {
    const [packages, setPackages] = useState([]);
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const userInfo = window?.localStorage?.getItem('userInfo') && JSON?.parse(window?.localStorage?.getItem('userInfo'));
    const navigate = useNavigate();
    const { name } = useParams();
    // console.log(userInfo.email)
    // console.log(name);
    // useEffect(() => {
    //     fetch('/fakedata.json', {
    //         method: 'GET',
    //         headers: {
    //             'content-Type': 'application/json',
    //             'authorization': `Bearer ${userInfo?.token}`
    //         },
    //         // body: JSON.stringify({ email: userInfo?.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setPackages(data)
    //             setIsLoading(false)
    //         })
    // }, []);
    // console.log(userInfo)
    useEffect(() => {
        fetch(`https://sleepy-stream-15565.herokuapp.com/api/package/packages`)
            // ,
            //     {
            //         method: 'GET',
            //         headers: {
            //             'content-type': 'application/json',
            //             'authorization': `Bearer ${userInfo.token}`
            //         },
            //     }
            // )
            .then(res => res.json())
            .then(data => setPackages(data))

    }, [])
    console.log(packages);
    // const catering = packages.filter(program => program.categories == `${name}`);
    // program.categories == `${name}  `
    // console.log(catering)

    const handleProductBuy = id => {
        navigate(`/confirmOrder/${id}`)
    }
    return (
        <div>
            <Container>
                {isLoading && <CircularProgress />}
                <h2>Lets explore products and accessories</h2>
                <Grid sx={{ my: 2 }} container spacing={4}>
                    {
                        packages.map(product => <Grid key={product.id} item xs={12} md={4}>
                            <Paper sx={{ p: 2 }} elevation={3} >
                                <img style={{ width: '100%', height: '200px' }} src={product.image_link} alt="" />
                                <h2>{product.package_name}</h2>
                                <p>{product.description.slice(0, 60)}</p>
                                <h2>price: {product.price}</h2>
                                <Button variant="contained" onClick={() => handleProductBuy(product.id)}>Book now</Button>
                            </Paper>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Catering;