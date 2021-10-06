import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import SearchContact from '../../SearchContact'
import ContactList from '../../ContactsList'
import ContactForm from '../../ContactForm'
import { addContact, deleteContact, filterContacts } from '../../../redux/contacts/contactsActions'
import {filterContactsByName, getValueForSearch} from '../../../redux/contacts/contactsSelectors'


const Home = () => {
  const contactsFromStore = useSelector(filterContactsByName)
  const valueForSearchContact = useSelector(getValueForSearch)
  const dispatch = useDispatch()

  const handleFilterContacts = (e) => {
    dispatch(filterContacts(e.currentTarget.value))
  }

  const formSubmitHandler = (name, number) => {
    dispatch(addContact(name, number))
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id))
  }

  return (
    <div data-testid='home-page'>
        <ContactForm OnSaveContacts={formSubmitHandler} />
        <SearchContact value={valueForSearchContact} onChange={handleFilterContacts}>
          Search contact:
        </SearchContact>
        <ContactList contacts={contactsFromStore} handleDeleteContact={ handleDeleteContact}/>
      </div>)
}
export default Home