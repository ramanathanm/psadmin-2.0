import React from 'react';
import PropType from 'prop-types';

const SelectInput = ({name, label, value, defaultOption, options, onChange, error}) => {
  return (
    <div className="form-group">
      <label htmlFor="name"> {label} </label>
      <div className="field">
        <select
          name={name}
          value={value}
          className='form-control'
          onChange={onChange}>
          <option>{defaultOption}</option>
          {
            options.map((option) => {
              return <option key={option.value} value={option.value}>{option.text}</option>;
            })
          }
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropType.string.isRequired,
  label: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
  defaultOption: PropType.string,
  value: PropType.string,
  error: PropType.string,
  options: PropType.arrayOf(PropType.object)
};

export default SelectInput;
