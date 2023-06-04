import React, { Component } from 'react';
import styled from "styled-components";
import { BsSunrise, BsCloudSun } from "react-icons/bs";
import { MdSevereCold } from "react-icons/md";

const Sections = () => {
    return (
        <Container>
            <Label>Temperature's rising<BsCloudSun color="orange" size={24} /></Label>
            <Line />
            <Flex>
                <Box src="/Bilder/London.png" width="400px"></Box>
                <Box src="/Bilder/Barcelona.png" width="400px"></Box>
                <Box src="/Bilder/Istanbul.png" width="400px"></Box>
            </Flex>
            <Label>It's getting cold here<MdSevereCold color="darkblue" size={24} /></Label>
            <Line />
            <Flex>
                <Box src="/Bilder/Helsinki.png" width="400px"></Box>
                <Box src="/Bilder/Oimjakon.png" width="400px"></Box>
                <Box src="/Bilder/Quebec.png" width="400px"></Box>
            </Flex>
            <Label>We are Worldwide!</Label>
            <Line />
        </Container>
    )
};

export default Sections;

const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
`

const Label = styled.div`
    padding: 20px 0;
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;

@media only screen and (max-width: 1250px) {
    font-size: 18px;
}
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
`

const Box = styled.img`
    @media only screen and (max-width: 1250px) {
    width: ${100/3}%;
}
cursor: pointer;
`