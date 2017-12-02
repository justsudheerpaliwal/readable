import React from 'react';
import { Form, Label, Input } from 'semantic-ui-react';

const CustomInput = (props) => {
  const {
    input,
    label,
    ls,
    placeholder,
    type, meta: { touched, error } 
  } = props;
  return (
    <div >
      <Form.Field
        control={Input}
        label={label}
        {...input}
        placeholder={placeholder}
        type={type}
        error={Boolean(touched && error)} 
      />
      {touched && error && <Label style={{ marginTop: '-0.5em' }} basic color="red" pointing>{error}</Label>}
    </div>
  );
};

export default CustomInput;
