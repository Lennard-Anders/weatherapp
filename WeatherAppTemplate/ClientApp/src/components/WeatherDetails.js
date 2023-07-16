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
import { useLocation } from 'react-router-dom';

const WeatherDetails = () => {
    const location = useLocation();
    const weatherData = location.state.weatherData;
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
        <>
        <div>
            <Farbe>
            <Image src="/Bilder/WeatherDetail.png" />
            <Div>
                 <FlexingRow>
                    <AnotherFlex>
                        <FlexValue>
                                <City>London</City>
                                <Celsius>31
                                    <VscCircleSmall size={50} color="black" />
                                C</Celsius>
                        </FlexValue>
                        <Day>Monday</Day>
                    </AnotherFlex>
                 <Section>Weather details</Section>
                 <FlexingCol>
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
                 </FlexingCol>
                 <Section>Weather in the next days</Section>
                 <FlexingCol2>
                        <Information>
                            Tomorrow
                        </Information>
                        <Information>
                            17.07.23
                        </Information>
                        <Information>
                            18.07.23
                        </Information>
                        <Information>
                            19.07.23
                        </Information>
                        <Information>
                            20.07.23
                        </Information>
                 </FlexingCol2>
                </FlexingRow>
            </Div>
            <PositionCanvas>
                {renderWeatherCanvas()}
            </PositionCanvas>
            </Farbe>
            </div>
        </>
    )
};

export default WeatherDetails;

const Image = styled.img`
    background-image: url("/Bilder/WeatherDetail.png");
    width: 100%;
    height: auto;
    background-size:cover;

    @media only screen and (max-width: 1400px) {
        display: none
    }
`

const Div = styled.div`
    position: absolute;
    top: 150px;
    width: 100%;
`

const Farbe = styled.div`
    @media only screen and (max-width: 1400px) {
        background: #7AA8B2;
        width: 100%;
        height: 182vh;
    }
`

const City = styled.div`
    color: black;
    font-size: 30px;
    font-weight: 500;
`

const FlexValue = styled.div`
    flex: 1;
`

const Information = styled.div`
    color: black;
    font-size: 21px;
    font-weight: 400;
    width: 100%;
    height: 220px;
    border-radius: 15px;
    background-color: rgba(255,255,255,0.8);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding-top: 5px;

    @media only screen and (max-width: 1400px) {
        width: 200px;
    }
    @media only screen and (max-width: 600px) {
        width: 150px;
    }
`

const FlexingRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center;
`

const FlexingCol = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 75px;
    gap: 60px;
    align-items: center;
    text-align: center;
    width: 100%;

    @media only screen and (max-width: 1400px) {
        flex-basis: 20%;
        flex-wrap: wrap;
    }
`

const FlexingCol2 = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 45px;
    gap: 60px;
    align-items: center;
    text-align: center;
    width: 100%;

    @media only screen and (max-width: 1400px) {
        flex-basis: 20%;
        flex-wrap: wrap;
    }
`

const Celsius = styled.div`
    color: black;
    font-size: 90px;
    font-weight: 300;
`

const AnotherFlex = styled.div`
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;
    width: 500px;
    
    padding: 30px;
    border-radius: 15px;
    background-color: rgba(255,255,255,0.8);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`

const Day = styled.div`
    color: darkgray;
    font-size: 24px;
    font-weight: 500;
`

const PositionCanvas = styled.div`
    position: absolute;
    top: -80px;
    left: 40%;
    align-items: center;
    padding: 30px;

    @media only screen and (max-width: 1400px) {
        position: absolute;
        top: 80px;
        left: 40%;
        align-items: center;
        padding: 30px;
    }

    @media only screen and (max-width: 600px) {
        position: absolute;
        top: 80px;
        left: 100px;
        align-items: center;
        padding: 30px;
    }
`

const Section = styled.div`
    font-size: 21px;
    font-weight: 400;
    margin-top: 82px;
    background: white;
    width: 100%;
    height: 32px;
    border-radius: 20px;
    padding: 0 10px;
    background-color: rgba(255,255,255,0.8);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    text-align: center;
`