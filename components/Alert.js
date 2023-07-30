// Alert.js
import React from 'react';

const Alert = ({ alertType, message }) => {
  // Define CSS classes for different alert types
  const alertClasses = {
    success: 'alert-success',
    error: 'alert-error',
    warning: 'alert-warning',
    info: 'alert-info',
  };

  const alertClass = alertClasses[alertType] || 'alert-default';

  return (
    <div className={`${alertClass}`}>
      <p>{message}</p>
    </div>
  );
};

export default Alert;