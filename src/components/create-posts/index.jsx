import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

export default class CreatePostsModal extends React.Component {
  render() {
    return (
      <Modal size="small" open={this.props.isPostModalOpen} onClose={() => this.props.handlePostModalState(false)} >
        <Modal.Header>
          Add post
        </Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete your account</p>
        </Modal.Content>
        <Modal.Actions>
          <Button positive icon='checkmark' content='Post' />
        </Modal.Actions>
      </Modal>
    );
  }
}