import styles from './SearchContact.module.css'
import cn from 'classnames'

const SearchContact = ({ value, onChange, children = 'Search', placeholder = 'Search...' }) => {
    const inputClass = cn({
        [styles.input]: true,
        [styles.filledCorrect]: value.length >= 2,
        [styles.filledError]: value.length === 1,
    })
    
    return (
        <label className={styles.label}>
            {children}
            <input
                className={inputClass}
                type='text'
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </label>
    )
}

export default SearchContact 