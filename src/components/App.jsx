
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';
import { Filter } from "./Filter/Filter";
import { AppContainer, Title, Header } from "./App.styled";
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from "redux/filterSlice";
import { addContact, deleteContact } from "redux/contactsSlice";




export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  

  const onAddContact = newContact => {
    
    if (contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name}: is already in contacts`)
    } else {
      dispatch(addContact(newContact));
    }
    
    }
    
    

  const filterContacts = e => {
    dispatch(setFilter(e.target.value));
    
  };
  
  const renderContacts = () => {
  return [...contacts].filter(contact => contact.name.toLowerCase().trim().includes(filter.toLowerCase()))
};


  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId))
    
  };

   return (
    <AppContainer>
      <Header>Phonebook</Header>
      <ContactForm onSave={onAddContact} />
      <Title>Contacts</Title>
      <Filter filter={filter} onInput={filterContacts } />
      <ContactList contacts={ renderContacts()} onDelete={ onDeleteContact}/>
    </AppContainer>
  );
};