import { useState, useEffect } from 'react'
import defaultContacts from '../../../defaultContacts'
import SearchContact from '../../SearchContact'
import ContactList from '../../ContactsList'


const Home = () => {
    const [contacts, setContacts] = useState(defaultContacts)
  const [search, setSearch] = useState('')

useEffect(() => {
setContacts(defaultContacts.filter(listOfContacts => listOfContacts.name.toLowerCase().includes(search.toLowerCase())))
  
}, [search])

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  return (
      <div data-testid='home-page'>
        <SearchContact value={search} onChange={(e) => setSearch(e.currentTarget.value)}>
          Search contact:
        </SearchContact>
        <ContactList contacts={contacts} handleDeleteContact={ deleteContact}/>
      </div>)
}
export default Home