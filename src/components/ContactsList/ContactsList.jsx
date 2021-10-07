import style from '../ContactsList/ContactsList.module.css';


const ContactsList = ({ contacts, handleDeleteContact }) => {
    
    return (
        <ul data-testid='list-of-contacts' className={style.list}>
            {contacts?.map(({name, number, id}) => (
                <li className={style.item} key={id} data-testid='userContacts'>
                    <span className={style.text} data-testid="name">{name}</span>
                    <span className={style.text} data-testid="number">{number}</span>
                    <button
                        className={style.btn}
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