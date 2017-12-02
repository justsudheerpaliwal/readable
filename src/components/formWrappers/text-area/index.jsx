import React from 'react';
import { Form, Label, TextArea } from 'semantic-ui-react';

const CustomTextArea = (props) => {
  const {
    input,
    label,
    ls,
    placeholder,
    fluid,
    type,
    autoHeight,
    meta: { touched, error } 
  } = props;
  return (
    <div style={{ paddingTop: '0.5em', paddingBottom: '0.5em' }} >
      <Form.Field
        control={TextArea}
        label={label}
        {...input}
        placeholder={placeholder}
        type={type}
        autoHeight={autoHeight}
        fluid={fluid}
        error={Boolean(touched && error)}
      />
      {touched && error && <Label style={{ marginTop: '-0.5em' }} basic color="red" pointing>{error}</Label>}
    </div>
  );
};

export default CustomTextArea;
