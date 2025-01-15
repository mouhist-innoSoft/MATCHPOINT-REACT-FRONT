import React from 'react';
import PropTypes from 'prop-types';
import { IonDatetime, IonDatetimeButton, IonModal, IonLabel, IonItem } from '@ionic/react';

const InputDateModalFormat = ({ label, onChange }) => {
  const handleDateChange = e => {
    const selectedDate = e.detail.value;
    if (selectedDate && onChange) {
      const formattedDate = selectedDate.split('T')[0];
      onChange(formattedDate);
    }
  };

  return (
    <IonItem>
      {label && <IonLabel>{label}</IonLabel>} {/* Mostra o label, se fornecido */}
      <IonDatetimeButton datetime="datetime" />
      <IonModal keepContentsMounted={true}>
        <IonDatetime
          id="datetime"
          presentation="date"
          onIonChange={handleDateChange}
        />
      </IonModal>
    </IonItem>
  );
};

InputDateModalFormat.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputDateModalFormat;
