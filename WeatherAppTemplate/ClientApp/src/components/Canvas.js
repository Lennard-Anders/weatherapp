import React, { Component } from 'react';
import styled from "styled-components";

const Canvas = () => {
    return (
        <Container>
           <Image src="/Bilder/PlaceholderEarth.png" width="750" />
        </Container>
    )
};

export default Canvas;

const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
`

const Image = styled.img`
      padding: 25px 0;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
    
    @media only screen and (max-width: 1250px) {
    width: ${100 / 3}%;
}
`