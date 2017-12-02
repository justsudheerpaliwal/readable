import React from 'react';
import { Modal, Button, Grid } from 'semantic-ui-react';
import { Form, Field, reduxForm } from 'redux-form';
import CustomInput from '../formWrappers/input';
import CustomDropdown from '../formWrappers/dropdown';
import CustomTextArea from '../formWrappers/text-area';

/*eslint-disable*/
class CreatePostsModal extends React.Component {
  render() {
    const dummyOptions = [
        {
          key: '1',
          text: 'option 1',
          value: 'option 1',
        },
        {
          key: '2',
          text: 'option 2',
          value: 'option 2',
        },
        {
          key: '3',
          text: 'option 3',
          value: 'option 3',
        }
      ];
    return (
      <Modal size="small" closeIcon open={this.props.isPostModalOpen} onClose={() => this.props.handlePostModalState(false)} >
        <Modal.Header>
          Add post
        </Modal.Header>
        <Modal.Content>
          <Form className="ui form" style={{width: '70%', margin: 'auto'}}>
            <Field
              name="author"
              component={CustomInput}
              label="enter your name"
              placeholder="name"
              type="text"
            />
            <Field
              name="title"
              component={CustomInput}
              label="Enter title"
              placeholder="title"
              type="text"
            />
            <Field
              name="body"
              component={CustomTextArea}
              label="Enter content"
              type="text"
              placeholder="Enter your content here"
            />
            <Field
              name="category"
              component={CustomDropdown}
              label="Select category"
              options={dummyOptions}
              selection
              placeholder="Select category"
              fluid
              autoHeight
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button positive icon='checkmark' content='Post' />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default reduxForm({
  form: 'createPost'
})(CreatePostsModal);