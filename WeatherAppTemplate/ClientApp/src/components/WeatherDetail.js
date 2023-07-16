import React from 'react';
import styled from "styled-components";
import WeatherDetails from './WeatherDetails';
import NavMenu from './NavMenu';
import Footer from './Footer';


export default function WeatherDetail() {
    return (
        <div>
            <NavMenu />
            <WeatherDetails />
            <Footer />
        </div>
    )
};