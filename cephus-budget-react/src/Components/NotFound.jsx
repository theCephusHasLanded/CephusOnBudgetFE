import React from 'react';

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
    <div>
      <h1>OOPS!</h1>
      <button onClick={showError}>Regresa a Casa? 🏡</button>
    </div>
  );
};

export default NotFound;
