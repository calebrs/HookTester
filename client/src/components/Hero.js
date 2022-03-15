import React, { useContext, useState } from 'react';
import styled from 'styled-components/macro';
import { COLORS } from '../constants.js';
import { UserContext } from '../App';

const Hero = ({ handleClick }) => {
  const { setUserId } = useContext(UserContext);
  const [ newUserId, setNewUserId ] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setUserId(newUserId);
    localStorage.setItem("hooktester-userId", newUserId);
  };

  return (
    <Wrapper>
      <TextArea>
        <h2>Easily test and inspect webhooks with our user-friendly interface</h2>
        <a href='/api/url'><Button onClick={handleClick}>Create URL</Button></a>
      </TextArea>
      <LoginForm onSubmit={handleLogin}>
        <h2>Log In</h2>
        <label htmlFor="userid" >User ID</label>
        <input id="userid" type="text" value={newUserId} onChange={e => setNewUserId(e.target.value)} />
        <button type="submit">Submit</button>
      </LoginForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/assets/background.jpg");
  background-size: cover;
  overflow: hidden;
  padding: 100px 0px 0px;
`;

const TextArea = styled.div`
  background-color: ${COLORS.transparentPurple};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  max-width: 95%;
  padding: 50px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 2px 2px 7px hsl(217deg 0% 10% / 0.2);
`;

const Button = styled.button`
  background: linear-gradient(90deg, #4adbd9, #32d5e2, #1dcfeb, #1bc8f1, #2fc1f6, #48b9f7, #60b0f6, #77a6f2);
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  height: 50px;
  width: 150px;
  margin: 10px auto;
  box-shadow: 2px 2px 4px hsl(217deg 0% 10% / 0.5);
  transition: transform 200ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;

const LoginForm = styled.form`
  background-color: ${COLORS.transparentPurple};
  border-radius: 8px;
  width: 50%;
  padding: 50px;
  margin: 10px auto;
  text-align: center;
`;
export default Hero;