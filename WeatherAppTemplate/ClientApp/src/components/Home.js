import React, { Component } from 'react';
import NavMenu from "./NavMenu";
import Carousel from "./Carousel";
import Sections from "./Sections";
import Canvas from "./Canvas";
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
                <Canvas />
                <Footer />
            </Gradient>
        </div>
    );
  }
}

const Gradient = styled.div`
    background: linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #B4BAEB 100%); 
`