import React from 'react';
import PropTypes from 'prop-types';
import { IonItem, IonInput, IonLabel } from '@ionic/react';

const InputCpf = ({ value = '', onChange, label = 'CPF', placeholder = '000.000.000-00' }) => {
  const formatarCpf = valor => {
    const apenasNumeros = valor.replace(/\D/g, '');

    return apenasNumeros
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };

  const handleInputChange = event => {
    const valor = event.detail.value || '';
    const cpfFormatado = formatarCpf(valor);
    onChange(cpfFormatado);
  };

  return (
    <IonItem>
      {label && <IonLabel>{label}</IonLabel>} {/* Exibe o label, se fornecido */}
      <IonInput
        value={value}
        onIonChange={handleInputChange}
        type="text"
        placeholder={placeholder}
        inputmode="numeric"
      ></IonInput>
    </IonItem>
  );
};

InputCpf.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string
};

export default InputCpf;
