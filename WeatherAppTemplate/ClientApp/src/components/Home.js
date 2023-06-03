import React, { Component } from 'react';
import NavMenu from "./NavMenu";
import Carousel from "./Carousel";
import Sections from "./Sections";
import Canvas from "./Canvas";
import Footer from "./Footer";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
        <div>
            <NavMenu />
            <Carousel />
            <Sections />
            <Canvas />
            <Footer />
        </div>
    );
  }
}
