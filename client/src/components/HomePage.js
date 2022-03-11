import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from './Header';
import Hero from './Hero';
import { baseURL } from '../constants';

const HomePage = ({ setUserId }) => {
  const navigate = useNavigate();

  const createUrl = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${baseURL}/api/url`, {});
    navigate(`/inspect/${response.data.url}`);
  };

  return (
    <>
      <Header />
      <Hero handleClick={createUrl} setUserId={setUserId}/>
    </>
  );
};

export default HomePage;