import styles from './SearchComponent.module.css'
import cn from 'classnames'

const SearchComponent = ({value, onChange, placeholder = 'Search...' }) => {
    const inputClass = cn({
        [styles.input]: true,
        [styles.filledCorrect]: value?.length >= 2,
        [styles.filledError]: value?.length === 1,
    })
    
    return (
        <form className={styles.form}>
            <label className={styles.label}>
            <input
                className={inputClass}
                type='text'
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                data-testid='input-searchContact'
            />
            <button className={styles.button}>P</button>
        </label>
        </form>
        
    )
}

export default SearchComponent 