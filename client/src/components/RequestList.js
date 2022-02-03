import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import RequestDetails from './RequestDetails';
import { COLORS } from '../constants.js';

const RequestList = ({ requests }) => {
  requests.sort((a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp));
  const [ currRequest, setCurrRequest ] = useState(requests.length > 0 ? requests[0]['_id'] : undefined); //

  useEffect(() => {
    if (requests.length > 0) {
      setCurrRequest(requests[0]['_id']);
    }
  }, [requests]);

  const handleSelectItem = (e) => {
    setCurrRequest(e.target.id);
  };

  return (
    <Container>
      <ListWrapper>
        <Title>Requests</Title>
        <List>
          {requests.map(req => {
            return (
              <ReqListItem key={req._id} id={req._id} onClick={handleSelectItem} active={currRequest === req._id}>
                {req.timestamp}
              </ReqListItem>
            );
          })}
        </List>
      </ListWrapper>
      <RequestDetails requests={requests} currRequest={currRequest} />
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
  min-width: 250px;
  overflow: auto;
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
  background-color: ${props => props.active ? COLORS.seagreen : "transparent"};
  color: ${props => props.active ? COLORS.darkPurple : "white"};
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