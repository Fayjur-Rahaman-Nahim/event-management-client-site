import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider, Grid } from '@mui/material';

const ConfirmOrder = () => {
    const { id } = useParams();
    const { superPackage, setSuperPackage } = useState([])

    // const { user } = useAuth();
    const userInfo = window?.localStorage?.getItem('userInfo') && JSON?.parse(window?.localStorage?.getItem('userInfo'));
    const navigate = useNavigate();
    const [products, setProduct] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data)
            })
    }, [])
    const newPackage = products?.find(product => product?.id == `${id}`);
    console.log(newPackage);
    // useEffect(() => {
    //     fetch('./fakedata.json', {
    //         method: 'GET',
    //         headers: {
    //             'content-Type': 'application/json',
    //             'authorization': `Bearer ${userInfo?.token}`
    //         },
    //         // body: JSON.stringify({ email: userInfo?.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setProduct(data)
    //             console.log(data);
    //             // setIsLoading(false)
    //         })
    // }, []);
    // const filterData = products.filter(product => console.log(product))
    // console.log(filterData)
    const onSubmit = data => {
        // data.email = user.email;
        // data.product = newPackage;
        data.status = 'pending';
        console.log(data);
        // fetch('https://aqueous-citadel-84780.herokuapp.com/placeOrder', {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             alert('successfully booked program');
        //             reset();
        //         }
        //     })
    };
    return (
        <div>
            <div className="mt-5 pt-5">

                <Row lg={2} xs={1} className="mx-auto">
                    {/* <Grid container spacing={2}> */}
                    {/* <Grid item xs={12} md={5}> */}
                    {/* <Col className="px-5">
                        <img width="100%" src={newPackage.image_link} alt="" />
                        <Typography sx={{ fontWeight: 400 }} variant="h2" gutterBottom component="div">
                            {newPackage.package_name}
                        </Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: 15 }} variant="caption" gutterBottom component="div">
                            {newPackage.description}
                        </Typography>
                        <Typography sx={{ fontWeight: 400 }} variant="h3" gutterBottom component="div">
                            BDT: {newPackage.price} Tk
                        </Typography>
                    </Col> */}
                    {/* </Grid> */}
                    <Col className="px-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="text-danger fw-bold">Booking Confirmation</h1>
                            <div className="form-floating mb-3">
                                <input defaultValue={''} {...register("name")} type="name" className="form-control" id="floatingInput" readOnly />
                                <label htmlfor="floatingInput">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input defaultValue={''} {...register("email")} type="email" className="form-control" id="floatingEmail" readOnly />
                                <label htmlfor="floatingEmail">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input {...register("address")} type="text" className="form-control" id="floatingAddress" placeholder="Address" />
                                <label htmlfor="floatingAddress">Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input {...register("number")} type="text" className="form-control" id="floatingPhone" placeholder="Phone Number" />
                                <label htmlfor="floatingPhone">Phone Number</label>
                            </div>
                            <input type="submit" className="btn btn-outline-danger form-control" value="Confirm Order" />
                        </form>
                    </Col>
                </Row>

            </div >
        </div>
    );
};

export default ConfirmOrder;