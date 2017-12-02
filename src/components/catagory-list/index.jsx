import React from 'react';
import { Label, Loader } from 'semantic-ui-react';

export default function CatagoryList(props) {
  return (
    props.categories ? (
      <Label.Group style={props.style} color="purple" size="huge">
        {
          props.categories.map((category, index) =>
            (
              <Label as="a" key={index}>
                {category.name}
              </Label>
            ))
        }
      </Label.Group>
    ) :
      (
        <Loader active />
      )
  );
}
