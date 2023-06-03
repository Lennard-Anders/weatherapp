import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from "styled-components"

function CarouselTest(images) {
    return (
        <Container>
            <Carousel showArrows={true} showThumbs={true} autoPlay={true} autoFocus={true} infiniteLoop={true} interval={5000} emulateTouch={true} dynamicHeight={false}>
                <div>
                   <img src="/Bilder/Slider1.png" alt='SliderBild' className="image" />
                </div>
                <div>
                    <img src="/Bilder/Slider1.png" alt='SliderBild' className="image" />
                </div>
                <div>
                    <img src="/Bilder/Slider1.png" alt='SliderBild' className="image" />
                </div>
            </Carousel>
        </Container>
    )

}

export default CarouselTest;

const Container = styled.div`
    width: 100%;
    // max-width: 1435px;
    // background: #191970;
    margin: 0 auto;
    z-index: 1;

    .carousel .control-dots{
        margin: 0px 0;
    }

    .carousel .slide img{
        height: 700px;
        object-fit: cover;
    }

    .carousel .control-dots{
        top:93%;
    }

    .carousel .thumbs-wrapper{
        display: none;
    }

    .carousel .carousel-status{
        display:none;
    }
`