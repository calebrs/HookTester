import React from 'react';
import styled from 'styled-components/macro';

const Header = () => {
  return (
    <HeaderBar>
      <PlainAnchor href="/"><h1>HookTester&#129693;</h1></PlainAnchor>
    </HeaderBar>
  );
};

const HeaderBar = styled.div`
  background-color: hsl(260,100%,15%);
  color: white;
  padding: 10px 20px;
`;

const PlainAnchor = styled.a`
  color: white;
  text-decoration: none;
`;

export default Header;