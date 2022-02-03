import React, { useState } from 'react';
import styled from 'styled-components/macro';
import RequestDetails from './RequestDetails';
import { COLORS } from '../constants.js';

const RequestList = ({ requests }) => {
  console.log(requests);
  const [ currRequest, setCurrRequest ] = useState();

  const handleSelectItem = (e) => {
    console.log(e.target.id);
    setCurrRequest(e.target.id);
  };

  return (
    <Container>
      <ListWrapper>
        <Title>Requests</Title>
        <List>
          {requests.map(req => {
            return (
              <ReqListItem key={req._id} id={req._id} onClick={handleSelectItem}>
                {req.timestamp}
              </ReqListItem>
            );
          })}
        </List>
      </ListWrapper>
      {currRequest && <RequestDetails requests={requests} requestId={currRequest} />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const ListWrapper = styled.div`
  background-color: ${COLORS.darkPurple};
  color: white;
  padding: 20px;
  height: 100%;
  width: 20%;
`;

const Title = styled.h2`
  color: ${COLORS.white};
  text-align: center;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ReqListItem = styled.li`
  border: 2px solid ${COLORS.seagreen};
  border-radius: 4px;
  font-size: 0.8rem;
  padding: 15px;
  margin: 10px 0;

  &:hover, &:active {
    cursor: pointer;
    background-color: ${COLORS.seagreen};
    color: ${COLORS.darkPurple};
  }
`;

export default RequestList;