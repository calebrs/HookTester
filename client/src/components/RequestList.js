import React, { useState } from 'react';
import styled from 'styled-components/macro';
import RequestDetails from './RequestDetails';
import { COLORS } from '../constants.js';

const RequestList = ({ requests }) => {
  console.log(requests);
  const [ currRequest, setCurrRequest ] = useState();

  const handleSelectItem = (e) => {
    setCurrRequest(e.target.req_id);
  };

  return (
    <Container>
      <ListWrapper>
        <Title>Requests</Title>
        <List>
          {requests.map(req => {
            return (
              <ReqListItem key={req._id} onClick={handleSelectItem}>
                {req.timestamp}
              </ReqListItem>
            );
          })}
        </List>
      </ListWrapper>
      <RequestDetails requests={requests} requestId={currRequest} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: calc(100vh - 144px);
`;

const ListWrapper = styled.div`
  border: 1px solid ${COLORS.darkGray};
  padding: 20px;
  height: 100%;
  width: 20%;
`;

const Title = styled.h2`
  color: ${COLORS.purple};
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

  &:hover {
    cursor: pointer;
    background-color: ${COLORS.seagreen};
  }
`;

export default RequestList;