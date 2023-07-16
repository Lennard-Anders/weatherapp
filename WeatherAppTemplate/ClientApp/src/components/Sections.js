import React, { Component } from 'react';
import styled from "styled-components";
import { BsSunrise, BsCloudSun } from "react-icons/bs";
import { MdSevereCold } from "react-icons/md";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Sections = () => {
    const navigate = useNavigate();

    const getWeatherForCity = async (city) => {
        try {
            const response = await axios.get(`https://localhost:7210/api/Weather/GetWeatherForCity?city=${city}`);
            return response.data;
        } catch (error) {
            console.error('Fehler beim Abrufen der Wetterdaten:', error);
            return null;
        }
    };

    const handleClick = async (city) => {
        const data = await getWeatherForCity(city);
        if (data === undefined || data === null) {
            navigate("/error");
            return;
        }
        navigate(`/dashboard`, { state: { weatherData: data, searchQuery: city } });
    }
    return (
        <Container>
            <Label>Temperature's rising<BsCloudSun color="orange" size={24} /></Label>
            <Line />
            <Flex>
                <Button onClick={() => handleClick("London")}><Box src="/Bilder/London.png" width="400px"></Box></Button>
                <Button onClick={() => handleClick("Barcelona")}><Box src="/Bilder/Barcelona.png" width="400px"></Box></Button>
                <Button onClick={() => handleClick("Istanbul")}><Box src="/Bilder/Istanbul.png" width="400px"></Box></Button>
            </Flex>
            <Label>It's getting cold here<MdSevereCold color="darkblue" size={24} /></Label>
            <Line />
            <Flex>
                <Button onClick={() => handleClick("Helsinki")}><Box src="/Bilder/Helsinki.png" width="400px"></Box></Button>
                <Button onClick={() => handleClick("Winnipeg")}><Box src="/Bilder/Winnipeg.png" width="400px"></Box></Button>
                <Button onClick={() => handleClick("Quebec")}><Box src="/Bilder/Quebec.png" width="400px"></Box></Button>
            </Flex>
            <Label>We are Worldwide!</Label>
            <Line />
        </Container>
    )
};

export default Sections;


const Button = styled.button`
    background-color: transparent;
    border: none;
`

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