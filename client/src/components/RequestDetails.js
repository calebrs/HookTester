import React from 'react';
import styled from 'styled-components/macro';
import { COLORS } from '../constants.js';

const RequestDetails = ({ requests, requestId }) => {
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
          <tr>
            <Td>Source</Td>
            <Td>{req.source}</Td>
          </tr>
        </tbody>
      </Table>
      {/* <h2>Headers</h2> */}
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
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