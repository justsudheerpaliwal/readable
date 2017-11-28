import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';


export default function Header() {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <Image
            size="mini"
            src="/logo.jpg"
            style={{ marginRight: '1.5em' }}
          />
          Readable
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item as="a">Add a post</Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
