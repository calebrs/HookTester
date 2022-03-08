import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { COLORS } from '../constants.js';
import { WaypostContext } from 'waypost-sdk-react';

const Header = () => {
  const { sdkClient } = useContext(WaypostContext);
  console.log(sdkClient);

  if (sdkClient.evaluateFlag('Turquoise Header', true)) {
    return (
      <HeaderBarB>
        <PlainAnchor href="/"><h1>HookTester&#129693;</h1></PlainAnchor>
      </HeaderBarB>
    );
  } else {
    return (
      <HeaderBar>
        <PlainAnchor href="/"><h1>HookTester&#129693;</h1></PlainAnchor>
      </HeaderBar>
    );
  }
};

const HeaderBar = styled.div`
  background-color: ${COLORS.darkPurple};
  color: white;
  padding: 10px 20px;
`;

const HeaderBarB = styled.div`
  background-color: ${COLORS.turquoise};
  color: white;
  padding: 10px 20px;
`;

const PlainAnchor = styled.a`
  color: white;
  text-decoration: none;
`;

export default Header;