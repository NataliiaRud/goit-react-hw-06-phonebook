import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactContainer,
  List,
  Item,
  ItemWrapper,
  Btn,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactContainer>
      <List>
        {contacts.map(contact => (
          <Item key={contact.id}>
            <ItemWrapper>
              <span>{contact.name}: </span>
              <span>{contact.number}</span>

              <Btn type="button" onClick={() => onDelete(contact.id)}>
                Delete
              </Btn>
            </ItemWrapper>
          </Item>
        ))}
      </List>
    </ContactContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
