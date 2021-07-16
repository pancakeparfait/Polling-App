import React from 'react';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../Common/Utility';
import Footer from '../../Components/Footer';

const GuestLayout = (props) => {
  return (
    <>
      {isLoggedIn() ? (
        <Redirect to="/signout" />
      ) : (
        <>
          {props.children}
          <Footer />
        </>
      )}
    </>
  );
};

export default GuestLayout;
