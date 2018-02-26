import React from 'react';
import PropType from 'prop-types';

const TextInput = ({name, title, onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group';
  if(error && error.length > 0) {
    wrapperClass += ' has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor="name">{title}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes= {
  name: PropType.string.isRequired,
  title: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
  placeholder: PropType.string,
  value: PropType.string,
  error: PropType.string
}
export default TextInput;