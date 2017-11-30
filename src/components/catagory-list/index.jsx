import React from 'react';
import { Label } from 'semantic-ui-react';

export default function CatagoryList(props) {
  return (
    <Label.Group style={props.style} color="purple" size="huge">
      {
        props.categories && props.categories.map((category) =>
          (
            <Label as="a">
              {category.name}
            </Label>
          ))
      }
    </Label.Group>
  );
}
