import React from 'react';
import { Form, Label, Dropdown } from 'semantic-ui-react';

const CustomDropdown = (props) => {
  const {
    input,
    label,
    ls,
    placeholder,
    type, meta: { touched, error },
    options,
    selection
  } = props;
  return (
    <div>
      <Form.Field
        label={label}
        size="large"
        control={Dropdown}
        options={options}
        selection={selection}
        {...input}
        onChange={(param, data) => input.onChange(data.value)}
        placeholder={placeholder}
        type={type}
        error={Boolean(touched && error)}
      />
      {touched && error && <Label style={{ marginTop: '-0.5em' }} basic color="red" pointing>{error}</Label>}
    </div>
  );
};

export default CustomDropdown;
