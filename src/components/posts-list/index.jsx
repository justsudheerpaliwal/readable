import React from 'react';
import { Divider } from 'semantic-ui-react';
import PostsItem from '../post-item';

export default function PostsList() {
  return (
    <div style={{ margin: '6em 0em' }}>
      <PostsItem />
      <Divider
        as="h4"
        className="header"
        horizontal
      />

      <PostsItem />
      <Divider
        as="h4"
        className="header"
        horizontal
      />

      <PostsItem />
      <Divider
        as="h4"
        className="header"
        horizontal
      />

      <PostsItem />
      <Divider
        as="h4"
        className="header"
        horizontal
      />
    </div>
  );
}
