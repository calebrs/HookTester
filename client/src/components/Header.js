import React from 'react';
import styled from 'styled-components/macro';
import { COLORS } from '../constants.js';

const Header = () => {
  return (
    <HeaderBar>
      <PlainAnchor href="/"><h1>HookTester&#129693;</h1></PlainAnchor>
    </HeaderBar>
  );
};

const HeaderBar = styled.div`
  background-color: ${COLORS.darkPurple};
  color: white;
  padding: 10px 20px;
`;

const PlainAnchor = styled.a`
  color: white;
  text-decoration: none;
`;

export default Header;