import React, { Component } from 'react';
import NavMenu from './NavMenu';
import styled from "styled-components"
import Footer from './Footer';

const Error = () => {
    return (
        <div>
            <NavMenu />
                <Div>
                    <ErrorImage src="/Bilder/Error.png" />
                </Div>
            <Footer />
        </div>
    )
}

export default Error;

const Div = styled.div`
    background-color: rgba(123, 169, 178, 1);
    height: 700px;
    align-items: center,

`

const ErrorImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    height: auto;
`