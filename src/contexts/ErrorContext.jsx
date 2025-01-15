import React, { createContext, useState, useContext } from 'react';
import { IonToast } from '@ionic/react';
import PropTypes from 'prop-types';

const ErrorContext = createContext();

let showErrorGlobal;

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const showError = (message) => {
    setError(message);
    setShowToast(true);
  };

  showErrorGlobal = showError;

  return (
    <ErrorContext.Provider value={{ showError }}>
      {children}
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={error}
        duration={3000}
        color="danger"
        position="top"
        cssClass="custom-toast"
      />
    </ErrorContext.Provider>
  );
};

ErrorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useError = () => {
  return useContext(ErrorContext);
};

export const showError = (message) => {
  if (showErrorGlobal) {
    showErrorGlobal(message);
  }
};