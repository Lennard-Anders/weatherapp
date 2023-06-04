import React, { Component } from 'react';
import styled from "styled-components";

const Footer = () => {
    return (
        <Container>
            <Line />
            <Flex>
                <AppName><Logo src="/Bilder/Weather360logo.png" width="95" />Weather360</AppName>
                <Flex2>
                    <Partner>
                        Partners:
                    </Partner>
                    <Image src="/Bilder/hfu.png" alt="HFU" height="60" />
                    <Image src="/Bilder/Mhplogo.jpg" alt="MHP" height="60" />
                </Flex2>
            </Flex>
        </Container>
    )
};

export default Footer;

const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
`
const Line = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    width: 95%;
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    gap: 20px;
`

const Flex2 = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    gap: 20px;
`

const Logo = styled.img`
    align-items: center;
    box-shadow: 0px 6px 5px #ccc;
    border-radius:190px;
`

const Partner = styled.div`
    padding: 20px 0;
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: white;
`
const AppName = styled.div`
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: white;
`

const Image = styled.img`
    align-items: center;
    box-shadow: 0px 6px 5px #ccc;
    border-radius:10px;
    object-fit: cover;
    width: 120px;
`