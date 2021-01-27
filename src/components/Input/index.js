import React from 'react';
import PropTypes from 'prop-types';
import InputBase from './styles';

export default function Input({ onChange, value, placeholder, isError }) {
  return (
    <div>
      <InputBase
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        isError={isError}
      />
      {isError && <p className="error">Campo requerido.</p>}
    </div>
  );
}

Input.defaultProps = {
  value: '',
  placeholder: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isError: PropTypes.bool.isRequired,
};
