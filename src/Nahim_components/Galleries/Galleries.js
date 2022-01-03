import { Container } from '@mui/material';
import React from 'react';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row'
import Gallery from '../Gallery/Gallery';
import './Galleries.css'

const Galleries = () => {
    const [galleryPhotos, setgalleryPhotos] = useState([]);
    useEffect(() => {
        fetch("./gallery.json")
            .then(res => res.json())
            .then(data => setgalleryPhotos(data))
    }, [])
    return (
        <div className='mt-5 pt-5 image'>

            <Container maxWidth="lg">
                <Row xs={1} md={2} lg={4} className="g-2">
                    {
                        galleryPhotos.map(photo => <Gallery
                            key={photo.id}
                            photo={photo}></Gallery>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Galleries;