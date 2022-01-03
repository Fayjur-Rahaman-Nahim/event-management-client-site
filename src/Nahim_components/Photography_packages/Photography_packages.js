import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SuperPackage from '../SuperPackage/SuperPackage';


const Photography_packages = () => {
    const [superPackages, setSuperPackages] = useState([]);
    useEffect(() => {
        fetch("./photoPackages.json")
            .then(res => res.json())
            .then(data => setSuperPackages(data))
    }, [])
    return (
        <div className='mt-5 pt-5'>
            <Typography gutterBottom variant="h4" color="text.secondary" component="div" >
                --------------- Super Saver ----------------
            </Typography>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {

                        superPackages.map(superPackage => <SuperPackage key={superPackage.key}
                            superPackage={superPackage}></SuperPackage>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Photography_packages;