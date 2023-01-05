import React from 'react';
import { faker } from '@faker-js/faker';
import {  Card, Image } from 'semantic-ui-react'
const Comment = (props) => {
    console.log(props)
    return (
        <Card.Content>
        <Image
          floated='right'
          src={faker.image.avatar()}
        />
        <Card.Header>{props.author}</Card.Header>
        <Card.Meta>{props.date}</Card.Meta>
        <Card.Description>
          {props.content}
        </Card.Description>
      </Card.Content>
               
    );
}

export default Comment;