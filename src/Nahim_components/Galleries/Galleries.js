import { Container, Typography } from '@mui/material';
import React from 'react';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row'
import Gallery from '../Gallery/Gallery';
import GalleryCatering from '../GalleryCatering/GalleryCatering';
import GalleryFlowerDeco from '../GalleryFlowerDeco/GalleryFlowerDeco';
import './Galleries.css'

const Galleries = () => {
    const [galleryPhotos, setGalleryPhotos] = useState([]);
    const [galleryCatering, setGalleryCatering] = useState([]);
    const [galleryFlower, setGalleryFlower] = useState([]);
    useEffect(() => {
        fetch("./gallery.json")
            .then(res => res.json())
            .then(data => setGalleryPhotos(data))
    }, [])
    useEffect(() => {
        fetch("./galleryCatering.json")
            .then(res => res.json())
            .then(data => setGalleryCatering(data))
    }, [])
    useEffect(() => {
        fetch("./galleryFlower.json")
            .then(res => res.json())
            .then(data => setGalleryFlower(data))
    }, [])
    return (
        <div className='mt-5 pt-5 image'>

            <Container maxWidth="lg">
                <div className='w-75 mx-auto bg-light rounded-pill'><Typography gutterBottom variant="h4" color="text.secondary" component="div" >
                    --------------- <span className='fw-bold'>Photoshoot</span> ----------------
                </Typography></div>
                <Row xs={1} md={2} lg={4} className="g-2">
                    {
                        galleryPhotos.map(photo => <Gallery
                            key={photo.id}
                            photo={photo}></Gallery>)
                    }
                </Row>
            </Container>
            <Container maxWidth="lg" className="mt-5">
                <div className='w-75 mx-auto bg-light rounded-pill'><Typography gutterBottom variant="h4" color="text.secondary" component="div" >
                    --------------- <span className='fw-bold'>Catering</span> ----------------
                </Typography></div>
                <Row xs={1} md={2} lg={4} className="g-2">
                    {
                        galleryCatering.map(photo => <GalleryCatering
                            key={photo.id}
                            photo={photo}>
                        </GalleryCatering>)
                    }
                </Row>
            </Container>
            <Container maxWidth="lg" className="mt-5">
                <div className='w-75 mx-auto bg-light rounded-pill'><Typography gutterBottom variant="h4" color="text.secondary" component="div" >
                    --------------- <span className='fw-bold'>Flower Decoration</span> ----------------
                </Typography></div>
                <Row xs={1} md={2} lg={4} className="g-2">
                    {
                        galleryFlower.map(photo => <GalleryFlowerDeco
                            key={photo.id}
                            photo={photo}>
                        </GalleryFlowerDeco>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Galleries;