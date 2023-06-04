import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavMenu from "./NavMenu";
import Canvas from "./Canvas";
import Footer from "./Footer";
import styled from "styled-components";

const WeatherDetails = () => {
    const { searchQuery } = useParams();

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(`API_ENDPOINT/${searchQuery}`);
                const data = response.data;
                console.log(data); // Do something with the weather data
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, [searchQuery]);

    return (
        <div>
            <NavMenu />
            <Image src="/Bilder/WeatherDetail.png" />
            <Div>
                <Flex>
                    <City>London</City>
                    <Flex2>
                        <Information>
                            Wind
                        </Information>
                        <Information>
                            Humidity
                        </Information>
                        <Information>
                            Dew Point
                        </Information>
                        <Information>
                            Pressure
                        </Information>
                        <Information>
                            UV Index
                        </Information>
                        <Information>
                            Moon Phase
                        </Information>
                    </Flex2>
                </Flex>
            </Div>
            <PositionCelsius>
                <Flex>
                    <Celsius>31</Celsius>
                    <LittleCelsius>°C</LittleCelsius>
                </Flex>
            </PositionCelsius>
            <PositionDay>
                <Day>Mo</Day>
            </PositionDay>
            <PositionCanvas>
                Canvas
            </PositionCanvas>
            <PositionDayInformation>
                <Flex>
                    <DaysInfo>Mon</DaysInfo>
                    <DaysInfo>Tue</DaysInfo>
                    <DaysInfo>Wed</DaysInfo>
                    <DaysInfo>Thu</DaysInfo>
                    <DaysInfo>Fri</DaysInfo>
                    <DaysInfo>Sat</DaysInfo>
                    <DaysInfo>Sun</DaysInfo>
                </Flex>
            </PositionDayInformation>
            <Details>Details</Details>
            <PositionDetails>
                <Flex>
                    <HourInfo>1am</HourInfo>
                    <HourInfo>2am</HourInfo>
                    <HourInfo>3am</HourInfo>
                    <HourInfo>4am</HourInfo>
                    <HourInfo>5am</HourInfo>
                    <HourInfo>6am</HourInfo>
                    <HourInfo>7am</HourInfo>
                    <HourInfo>8am</HourInfo>
                    <HourInfo>9am</HourInfo>
                    <HourInfo>10am</HourInfo>
                    <HourInfo>11am</HourInfo>
                    <HourInfo>12pm</HourInfo>
                    <HourInfo>1pm</HourInfo>
                    <HourInfo>2pm</HourInfo>
                    <HourInfo>3pm</HourInfo>
                    <HourInfo>4pm</HourInfo>
                    <HourInfo>5pm</HourInfo>
                    <HourInfo>6pm</HourInfo>
                    <HourInfo>7pm</HourInfo>
                    <HourInfo>8pm</HourInfo>
                    <HourInfo>9pm</HourInfo>
                    <HourInfo>10pm</HourInfo>
                    <HourInfo>11pm</HourInfo>
                    <HourInfo>12am</HourInfo>
                </Flex>
            </PositionDetails>
            <Footer />
        </div>
    )
};

export default WeatherDetails;

const Image = styled.img`
    background-image: url("/Bilder/WeatherDetail.png");
    width: 100%;
    height: auto;
`

const Div = styled.div`
    position: absolute;
    top: 150px;
    width: 100%;
`
const City = styled.div`
    color: white;
    font-size: 30px;
    font-weight: 500;
`

const Information = styled.div`
    color: white;
    font-size: 24px;
    font-weight: 300;
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center;
`

const Flex2 = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    gap: 60px;
    align-items: center;
    text-align: center;
`


const PositionCelsius = styled.div`
   position: absolute;
   top: 200px;
   align-items: center;
`

const Celsius = styled.div`
    color: white;
    font-size: 90px;
    font-weight: 300;
`

const LittleCelsius = styled.div`
    padding-top: 30px;
    color: white;
    font-size: 30px;
    font-weight: 300;
`

const PositionDay = styled.div`
    position: absolute;
    top: 300px;
    align-items: center;
`

const Day = styled.div`
    padding-left: 70px;
    padding-top: 30px;

    color: white;
    font-size: 24px;
    font-weight: 300;
`

const PositionCanvas = styled.div`
    position: absolute;
    top: 370px;
    align-items: center;
    padding: 30px;
`

const PositionDayInformation = styled.div`
    position: absolute;
    top: 1000px;
    align-items: center;
    padding: 30px;
    width: 100%;
`

const Details = styled.div`
    position: absolute;
    top: 1400px;
    color: white;
    font-size: 22px;
    font-weight: 300;
    padding-left: 60px
`

const PositionDetails = styled.div`
    position: absolute;
    top: 1450px;
    align-items: center;
    padding: 30px;
    width: 100%;
`

const DaysInfo = styled.div`
    color: white;
    font-size: 22px;
    font-weight: 300;
`

const HourInfo = styled.div`
    color: white;
    font-size: 22px;
    font-weight: 300;
`

