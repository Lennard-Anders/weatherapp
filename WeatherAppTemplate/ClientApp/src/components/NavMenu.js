import React, { Component, useState} from 'react';
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import axios from 'axios';
import { useNavigate, useLocation, Link} from 'react-router-dom';

const NavMenu = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const getWeatherForCity = async (city) => {
        try {
            const response = await axios.get(`https://localhost:7210/api/Weather/GetWeatherForCity?city=${city}`);
            return response.data;
        } catch (error) {
            console.error('Fehler beim Abrufen der Wetterdaten:', error);
            return null;
        }
    };

    const handleSearch = async () => {
        const data = await getWeatherForCity(searchQuery);
        if (data === undefined || data === null) {
            navigate("/error");
            return;
        }
        console.log(data);
        navigate(`/dashboard`, { state: { weatherData: data, searchQuery: searchQuery } });
        // navigate(`/dashboard/${searchQuery}`, { state: { weatherData: data } });
    };

    return (
        <Navbar>
          <Header>
                <Flex>
                    <Link to="/"><Logo src="/Bilder/Weather360logo.png" width="95"></Logo></Link>
                    <Wrap>
                    <Search>
                            <SearchTerm type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} id="search" placeholder="Geben Sie einen Ort ein!"></SearchTerm>
                            <Button onClick={handleSearch} type="submit" class="searchButton">
                                <FaSearch />
                            </Button>         
                        </Search>
                    </Wrap>
                    <Link to="/"><Home><HiHome size={32} color="#3B69DE" /></Home></Link>
                </Flex>
            </Header>
        </Navbar>
    );
  }


export default NavMenu;


const Header = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    
`

const Navbar = styled.div`
    width: 100%;
    height: 100px;
    position: sticky;
    top: 0;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    z-index: 9999;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);

    @media only screen and (max-width: 600px) {
        height: 80px;
    }
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
`

const Logo = styled.img`
    align-items: center;
    box-shadow: 0px 6px 5px #ccc;
    border-radius:190px;
        
    @media only screen and (max-width: 600px) {
        width: 75px;
    }
`

const Wrap = styled.div`
    width: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
 `

const Search = styled.div`
    width: 100%;
    position: relative;
    display: flex;  
`

const Button = styled.div`
    width: 40px;
    height: 36px;
    border: 0.5px solid #3B69DE;
    background: #3B69DE;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
`

const SearchTerm = styled.input`
    width: 100%;
    border: 2px solid #3B69DE;
    border-right: none;
    height: 20px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9DBFAF;
    height: 36px;

    &:focus{
         color: #00B4CC;
    }

    
    @media only screen and (max-width: 600px) {
        font-size: 10px;
        color: gray
    }
`

const Home = styled.div`
    text-align: center;
`
