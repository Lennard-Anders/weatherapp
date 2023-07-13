import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import styled from "styled-components";
import CanvasSunny from './CanvasSunny';
import CanvasRainy from './CanvasRainy';
import CanvasCloudy from './CanvasCloudy';
import { VscCircleSmall } from "react-icons/vsc";

const WeatherDetails = () => {
    const { searchQuery } = useParams();
    const [weatherType, setWeatherType] = useState(1);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(`API_ENDPOINT/${searchQuery}`);
                const data = response.data;
                console.log(data); // Do something with the weather data
                setWeatherType(data.weatherType); 
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, [searchQuery]);

    const renderWeatherCanvas = () => {
        switch (weatherType) {
            case 1:
                return <CanvasSunny />;
            case 2:
                return <CanvasSunny />;
            case 3:
                return <CanvasSunny />;
            case 4:
                return <CanvasSunny />;
            case 5:
                return <CanvasSunny />;
            case 6:
                return <CanvasSunny />;
            case 7:
                return <CanvasCloudy />;
            case 8:
                return <CanvasCloudy />;
            case 9:
                return <CanvasCloudy />;
            case 10:
                return <CanvasCloudy />;
            case 11:
                return <CanvasCloudy />;
            case 12:
                return <CanvasRainy />;
            case 13:
                return <CanvasRainy />;
            case 14:
                return <CanvasRainy />;
            case 15:
                return <CanvasRainy />;
            case 16:
                return <CanvasRainy />;
            case 17:
                return <CanvasRainy />;
            case 18:
                return <CanvasRainy />;
            case 19:
                return <CanvasCloudy />;
            case 20:
                return <CanvasSunny />;
            case 21:
                return <CanvasSunny />;
            case 22:
                return <CanvasCloudy />;
            case 23:
                return <CanvasRainy />;
            case 24:
                return <CanvasRainy />;
            case 25:
                return <CanvasRainy />;
            case 26:
                return <CanvasRainy />;
            case 27:
                return <CanvasRainy />;
            case 28:
                return <CanvasRainy />;
            case 29:
                return <CanvasRainy />;
            case 30:
                return <CanvasSunny />;
            case 31:
                return <CanvasRainy />;
            case 32:
                return <CanvasCloudy />;
            case 33:
                return <CanvasCloudy />;
            case 34:
                return <CanvasCloudy />;
            case 35:
                return <CanvasCloudy />;
            case 36:
                return <CanvasCloudy />;
            case 37:
                return <CanvasCloudy />;
            case 38:
                return <CanvasCloudy />;
            case 39:
                return <CanvasRainy />;
            case 40:
                return <CanvasRainy />;
            case 41:
                return <CanvasRainy />;
            case 42:
                return <CanvasRainy />;
            case 43:
                return <CanvasRainy />;
            case 44:
                return <CanvasRainy />;
            default:
                return <CanvasCloudy />;
        }
    };

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
                    <LittleCel><VscCircleSmall size={50} color="white"/></LittleCel>
                    <LittleCelsius>C</LittleCelsius>
                </Flex>
            </PositionCelsius>
            <PositionDay>
                <Day>Mo</Day>
            </PositionDay>
            <PositionCanvas>
                {renderWeatherCanvas()}
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
    padding-top: 42px;
    margin-left: -15px;
    color: white;
    font-size: 35px;
    font-weight: 300;
    font-family: sans-serif !important;
`

const LittleCel = styled.div`
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
    top: -120px;
    left: -65px;
    align-items: center;
    padding: 30px;

    @media only screen and (max-width: 1400px) {
        position: absolute;
        top: 200px;
        left: -20px;
        align-items: center;
        padding: 30px;
    }
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

