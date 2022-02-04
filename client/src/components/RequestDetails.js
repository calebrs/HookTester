import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { COLORS } from '../constants.js';

const RequestDetails = ({ requests, currRequest }) => {
  const [ requestId, setRequestId ] = useState(currRequest);

  useEffect(() => {
    setRequestId(currRequest);
  }, [currRequest]);

  if (!requestId) {
    return <NoneMessage>No requests yet!</NoneMessage>;
  }

  const req = requests.find(elem => elem._id === requestId);
  return (
    <Wrapper>
      <h1>Request Details</h1>
      <Table>
        <tbody>
          <tr key={`timestamp-${req._id}`}>
            <Td>Timestamp</Td>
            <Td>{req.timestamp}</Td>
          </tr>
          <tr key={`method-${req._id}`}>
            <Td>Method</Td>
            <Td>{req.method}</Td>
          </tr>
        </tbody>
      </Table>
      <Table>
        <thead>
          <tr>
            <th>Header Name</th>
            <th>Header Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(req.headers).map(headerName => {
            return (
              <tr key={headerName}>
                <Td>{headerName}</Td>
                <Td>{req.headers[headerName]}</Td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {req.body &&
      <Table>
        <thead>
          <tr>
            <th>Body Key</th>
            <th>Body Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(req.body).map(key => {
            return (
              <tr key={key}>
                <Td>{key}</Td>
                <Td>{req.body[key]}</Td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      }
    </Wrapper>
  );
};

const NoneMessage = styled.div`
  color: ${COLORS.darkPurple};
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
`;

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  padding: 20px;
  color: ${COLORS.darkPurple};
`;

const Table = styled.table`
  margin: 20px;
`;

const Td = styled.td`
  border: 1px solid ${COLORS.blue};
  padding: 10px 20px;

  &:first-of-type {
    background-color: ${COLORS.blue};
    color: white;
    font-weight: bold;
  }
`;


export default RequestDetails;