const ContactsList = ({contacts = [], handleDeleteContact}) => {
    
    return (
        <ul data-testid='list-of-contacts'>
            {contacts.map(({name, number, id}) => (
                <li key={id} data-testid='userContacts'>
                    <span data-testid="name">{name}</span>
                    <span data-testid="number">{number}</span>
                    <button
                        type="button"
                        onClick={() => handleDeleteContact(id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default ContactsList