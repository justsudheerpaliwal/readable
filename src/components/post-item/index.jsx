import React from 'react';
import { Segment, Container, Header, Button } from 'semantic-ui-react';

export default function PostItem() {
  return (
    <Segment style={{ padding: '2em 0em' }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: '2em' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque</Header>
        <p style={{ fontSize: '1.33em' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus ex eget pretium 
          vehicula. Vestibulum rhoncus convallis mattis. Sed maximus justo finibus, convallis arcu ut, 
          accumsan justo. Maecenas rutrum interdum quam at luctus. Nunc massa velit, porta at ultricies vitae, 
          maximus ut erat. Vivamus id sapien ac libero rutrum accumsan. Morbi tristique vel massa sit amet 
          rhoncus. Sed ante metus, dignissim eu pretium in, euismod nec libero.
        </p>
        <Button as="a" size="large">Read more</Button>
      </Container>
    </Segment>
  );
}
