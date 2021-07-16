import React from 'react';
import { withAuth } from '../../Common/Utility';

const ViewCurrentPoll = (props) => {
  return (
    <>
      <h2 className="welcome-title">ICP's Current Poll</h2>
    </>
  );
};

export default withAuth(ViewCurrentPoll);
