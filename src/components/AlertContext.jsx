import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alertData, setAlertData] = useState({
    showAlert: false,
    alertMessage: '',
  });

  const showAlert = (message) => {
    setAlertData({
      showAlert: true,
      alertMessage: message,
    });
  };

  const hideAlert = () => {
    setAlertData({
      showAlert: false,
      alertMessage: '',
    });
  };

  return (
    <AlertContext.Provider value={{ alertData, showAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  return useContext(AlertContext);
};
