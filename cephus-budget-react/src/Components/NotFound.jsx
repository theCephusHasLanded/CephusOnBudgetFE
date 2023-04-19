import React from 'react';
import { Container, Button } from 'react-bootstrap';
import gif404 from '../404assets/404.gif';

const NotFound = () => {
  const handleGoBack = () => {
    // Replace the path below with your home route
    window.location.href = '/';
  };

  const showError = () => {
    alert("Just a Minor Malfunction!");
    handleGoBack();
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <img src={gif404} alt="404 error" />
      <Button variant="primary" onClick={showError}>Regresa a Casa? 🏡</Button>
    </Container>
  );
};

export default NotFound;
