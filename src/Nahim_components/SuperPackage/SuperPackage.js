import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Divider, Grid } from '@mui/material';
import { Link } from 'react-router-dom';


const SuperPackage = (props) => {
    const { key, name, price, photographer, duration, pictures, edited, print, matte } = props.superPackage;
    return (


        <Grid item xs={12} md={6} lg={3}>
            <Card >
                <CardContent style={{ height: '140px' }}>
                    <Typography gutterBottom variant="h7" component="div" >
                        {name}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div" >
                        TK.{price}/=
                    </Typography>

                </CardContent>

                <CardContent>
                    <Typography gutterBottom variant="body5" color="text.secondary">
                        {photographer} <span className='fw-bold'>Top</span> Photographer
                    </Typography>
                    <Divider />
                    <Typography gutterBottom variant="body5" color="text.secondary">
                        Event Duration: <span className='fw-bold'>{duration} Hours</span>
                    </Typography>
                    <Divider />
                    <Typography gutterBottom variant="body5" color="text.secondary">
                        Number of Pictures: {pictures} (All post processed)
                    </Typography>
                    <Divider />
                    <Typography gutterBottom variant="body5" color="text.secondary">
                        Specially Edited Photos: {edited} copies
                    </Typography>
                    <Divider />
                    <Typography gutterBottom variant="body5" color="text.secondary">
                        print: {print}
                    </Typography>
                    <Divider />
                    <Typography gutterBottom variant="body5" color="text.secondary">
                        Matte Prints: {matte} copies
                    </Typography>
                    <Divider />
                    <Typography gutterBottom variant="body5" color="text.secondary">
                        * All soft copy of photos will be delivered in Event Planner’s Signature Pen drive
                    </Typography>

                </CardContent>
                <CardActions>

                    <Link to={`/superSaver/${key}`} style={{ textDecoration: "none" }} className="m-auto">  <Button variant="contained" size="medium" className=' bg-dark'>
                        Book Now
                    </Button></Link>



                </CardActions>
            </Card>
        </Grid>

    );

};

export default SuperPackage;