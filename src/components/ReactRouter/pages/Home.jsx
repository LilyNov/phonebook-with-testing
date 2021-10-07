import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import SearchComponent from '../../SearchComponent'
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
      <SearchComponent value={valueForSearchContact} onChange={handleFilterContacts}>
        Search contact:
      </SearchComponent>
      <ContactList contacts={contactsFromStore} handleDeleteContact={ handleDeleteContact}/>
    </div>)
}
export default Home