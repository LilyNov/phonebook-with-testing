const ContactsList = ({contacts = [], deleteContact}) => {
    
    return (
        <ul>
            {contacts.map(({name, number, id}) => (
                <li key={id} data-testid='userContacts'>
                    <span data-testid="name">{name}</span>
                    <span data-testid="number">{number}</span>
                    <button
                        type="button"
                        onClick={() => deleteContact(id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default ContactsList