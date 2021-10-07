import styles from './SearchComponent.module.css'
import cn from 'classnames'

const SearchComponent = ({value, onChange, children = 'Search', placeholder = 'Search...' }) => {
    const inputClass = cn({
        [styles.input]: true,
        [styles.filledCorrect]: value?.length >= 2,
        [styles.filledError]: value?.length === 1,
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
                data-testid='input-searchContact'
            />
        </label>
    )
}

export default SearchComponent 