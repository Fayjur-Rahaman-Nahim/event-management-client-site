import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

const SuperSaverConfirmation = () => {
    // const { user } = useAuth();

    const { key } = useParams();
    const { superPackage, setSuperPackage } = useState([])
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();



    useEffect(() => {
        fetch(`https://lit-meadow-17656.herokuapp.com/meals/${key}`)
            .then(res => res.json())
            .then(data => setSuperPackage(data))
    }, []);

    const onSubmit = data => {
        const id = superPackage.key;
        const name = superPackage.name;

        const OrderInfo = {
            ...data,
            meal_id: id,
            meal_name: name,
            status: 'pending',

        }
        axios.post("https://lit-meadow-17656.herokuapp.com/order", OrderInfo)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Confirmed');
                    reset();
                    navigate('/')
                }
            })
    };
    return (
        <div className="mt-5 pt-5">

            <Row lg={2} xs={1} className="mx-auto">
                <Col >
                    <Card>
                        <CardContent style={{ height: '140px' }}>
                            <Typography gutterBottom variant="h7" component="div" >
                                {superPackage.name}
                            </Typography>

                            <Typography gutterBottom variant="h5" component="div" >
                                TK.{superPackage.price}/=
                            </Typography>

                        </CardContent>

                        <CardContent>
                            <Typography gutterBottom variant="body5" color="text.secondary">
                                {superPackage.photographer} <span className='fw-bold'>Top</span> Photographer
                            </Typography>
                            <Divider />
                            <Typography gutterBottom variant="body5" color="text.secondary">
                                Event Duration: <span className='fw-bold'>{superPackage.duration} Hours</span>
                            </Typography>
                            <Divider />
                            <Typography gutterBottom variant="body5" color="text.secondary">
                                Number of Pictures: {superPackage.pictures} (All post processed)
                            </Typography>
                            <Divider />
                            <Typography gutterBottom variant="body5" color="text.secondary">
                                Specially Edited Photos: {superPackage.edited} copies
                            </Typography>
                            <Divider />
                            <Typography gutterBottom variant="body5" color="text.secondary">
                                print: {superPackage.print}
                            </Typography>
                            <Divider />
                            <Typography gutterBottom variant="body5" color="text.secondary">
                                Matte Prints: {superPackage.matte} copies
                            </Typography>
                            <Divider />
                            <Typography gutterBottom variant="body5" color="text.secondary">
                                * All soft copy of photos will be delivered in Event Planner’s Signature Pen drive
                            </Typography>

                        </CardContent>
                    </Card>
                </Col>
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
    );
};

export default SuperSaverConfirmation;