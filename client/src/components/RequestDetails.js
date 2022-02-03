import React from 'react';

const RequestDetails = ({ requests, requestId }) => {
  console.log(requestId);

  return (
    <>
      <div>{requestId}</div>
      {/* {requests.map((req, idx) => {
        console.log(req);
        return (
          <div key={idx}>
            Method: {req.method} Timestamp: {req.timestamp}
          </div>
        );
      })} */}
    </>
  );
};

export default RequestDetails;