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
    const name = location.state.searchQuery;
    const [currTemp, setCurrTemp] = useState(0);
    const [minTemp, setMinTemp] = useState(0);
    const [maxTemp, setMaxTemp] = useState(0);

    const [windSpeed, setWindSpeed] = useState(0);
    const [windDirect, setWindDirect] = useState(0);

    const [rainProb, setRainProb] = useState(0);
    const [thunderProb, setThunderProb] = useState(0);
    const [snowProb, setSnowProb] = useState(0);

    const [moonPhase, setMoonPhase] = useState("");

    console.log(weatherData);
    const { searchQuery } = useParams();

    useEffect(() => {
        setWindSpeed(weatherData[0].day.windGust.speed.value);
        setWindDirect(weatherData[0].day.windGust.direction.degrees);
        setMoonPhase(weatherData[0].moon.phase);
        setRainProb(weatherData[0].day.rainProbability);
        setThunderProb(weatherData[0].day.thunderstormProbability);
        setSnowProb(weatherData[0].day.snowProbability);
    }, [weatherData]);

    useEffect(() => {
        setMinTemp(weatherData[0].minTemperature);
        setMaxTemp(weatherData[0].maxTemperature);
    }, [weatherData]);

    useEffect(() => {
        setCurrTemp((minTemp + maxTemp) / 2);
    }, [minTemp, maxTemp]);

    const renderWeatherCanvas = () => {
        switch (weatherData[0].day.icon) {
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

    const [day2, setDay2] = useState("");
    const [day3, setDay3] = useState("");
    const [day4, setDay4] = useState("");
    const [day5, setDay5] = useState("");

    const [currTempDay2, setCurrTempDay2] = useState(0);
    const [minTempDay2, setMinTempDay2] = useState(0);
    const [maxTempDay2, setMaxTempDay2] = useState(0);

    const [currTempDay3, setCurrTempDay3] = useState(0);
    const [minTempDay3, setMinTempDay3] = useState(0);
    const [maxTempDay3, setMaxTempDay3] = useState(0);

    const [currTempDay4, setCurrTempDay4] = useState(0);
    const [minTempDay4, setMinTempDay4] = useState(0);
    const [maxTempDay4, setMaxTempDay4] = useState(0);

    const [currTempDay5, setCurrTempDay5] = useState(0);
    const [minTempDay5, setMinTempDay5] = useState(0);
    const [maxTempDay5, setMaxTempDay5] = useState(0);

    useEffect(() => {
        setMinTempDay2(weatherData[1].minTemperature);
        setMaxTempDay2(weatherData[1].maxTemperature);

        setMinTempDay3(weatherData[2].minTemperature);
        setMaxTempDay3(weatherData[2].maxTemperature);

        setMinTempDay4(weatherData[3].minTemperature);
        setMaxTempDay4(weatherData[3].maxTemperature);

        setMinTempDay5(weatherData[4].minTemperature);
        setMaxTempDay5(weatherData[4].maxTemperature);

        setDay2(weatherData[1].date);
        setDay3(weatherData[2].date);
        setDay4(weatherData[3].date);
        setDay5(weatherData[4].date);
    }, [weatherData]);

    useEffect(() => {
        setCurrTempDay2((minTempDay2 + maxTempDay2) / 2);
        setCurrTempDay3((minTempDay3 + maxTempDay3) / 2);
        setCurrTempDay4((minTempDay4 + maxTempDay4) / 2);
        setCurrTempDay5((minTempDay5 + maxTempDay5) / 2);
    }, [minTempDay2, minTempDay3, minTempDay4, minTempDay5, maxTempDay2, maxTempDay3, maxTempDay4, maxTempDay5]);

    return (
        <>
        <div>
            <Image src="/Bilder/WeatherDetail.png" />
            <Div>
                 <FlexingRow>
                    <AnotherFlex>
                        <FlexValue>
                                <City>{name}</City>
                                <Celsius>{currTemp.toFixed(1)}
                                    <VscCircleSmall size={50} color="black" />
                                C</Celsius>
                        </FlexValue>
                        <Day>Monday</Day>
                    </AnotherFlex>
                 <Section>Weather details</Section>
                 <FlexingCol>
                    <Information>
                        Wind direction
                        <InfoDetail>{windDirect} deg.</InfoDetail>
                    </Information>
                    <Information>
                        Wind Speed
                        <InfoDetail>{windSpeed} km/h</InfoDetail>
                    </Information>
                    <Information>
                        Rain Probability
                        <InfoDetail>{rainProb}%</InfoDetail>
                    </Information>
                    <Information>
                        Snow Probability
                        <InfoDetail>{snowProb}%</InfoDetail>
                    </Information>
                    <Information>
                        Thunder Probability
                        <InfoDetail>{thunderProb}%</InfoDetail>
                    </Information>
                    <Information>
                        Moon Phase
                        <InfoDetail>{moonPhase}</InfoDetail>
                    </Information>
                 </FlexingCol>
                 <Section>Weather in the next days</Section>
                 <FlexingCol2>
                            <Information>
                            Today
                            <InfoDetail>{currTemp.toFixed(1)} Celsius</InfoDetail>
                        </Information>
                            <Information>
                            {new Date(day2).toLocaleDateString('de-DE')}
                            <InfoDetail>{currTempDay2.toFixed(1)} Celsius</InfoDetail>
                        </Information>
                        <Information>
                            {new Date(day3).toLocaleDateString('de-DE')}
                            <InfoDetail>{currTempDay3.toFixed(1)} Celsius</InfoDetail>
                        </Information>
                        <Information>
                            {new Date(day4).toLocaleDateString('de-DE')}
                            <InfoDetail>{currTempDay4.toFixed(1)} Celsius</InfoDetail>
                        </Information>
                        <Information>
                            {new Date(day5).toLocaleDateString('de-DE')}
                            <InfoDetail>{currTempDay5.toFixed(1)} Celsius</InfoDetail>
                        </Information>
                 </FlexingCol2>
                </FlexingRow>
            </Div>
            <PositionCanvas>
                {renderWeatherCanvas()}
            </PositionCanvas>
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
    padding-bottom: 25px;
`

const InfoDetail = styled.div`
    position: relative;
    top: 55px;
    font-size: 24px;
    color: black
`

const City = styled.div`
    color: black;
    font-size: 30px;
    font-weight: 500;

    
    @media only screen and (max-width: 1400px) {
        color: white;
    }
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
        background-color: rgba(123, 169, 178, 1);
        color: white;
    }
    @media only screen and (max-width: 600px) {
        width: 150px;
        background-color: rgba(123, 169, 178, 1);
        color: white;
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

    
    @media only screen and (max-width: 1400px) {
        color: white;
    }
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

    @media only screen and (max-width: 1400px) {
        width: 100%;
        background-color: rgba(123, 169, 178, 1);
        color: white;
    }
`

const Day = styled.div`
    color: darkgray;
    font-size: 24px;
    font-weight: 500;

    @media only screen and (max-width: 1400px) {
        color: white;
    }
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

    @media only screen and (max-width: 1400px) {
        color: white;
        background-color: rgba(123, 169, 178, 1);
    }
`