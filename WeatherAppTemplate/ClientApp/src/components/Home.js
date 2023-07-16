import React, { Component } from 'react';
import NavMenu from "./NavMenu";
import Carousel from "./Carousel";
import Sections from "./Sections";
import CanvasInsel from "./CanvasInsel";
import Footer from "./Footer";
import styled from "styled-components";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
        <div>
            <NavMenu />
            <Carousel />
            <Gradient>
                <Sections />
                <Container>
                    <CanvasInsel />
                </Container>
                <Footer />
            </Gradient>
        </div>
    );
  }
}

const Gradient = styled.div`
    background: linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #B4BAEB 100%); 
`

const Container = styled.div`
    height: 600px;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    z-index: 9999;
`