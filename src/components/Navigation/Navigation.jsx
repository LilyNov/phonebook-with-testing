import { NavLink } from 'react-router-dom'
import style from '../Navigation/Navigation.module.css'


const Navigation = () => {
    return (
        <nav className={style.nav}>
            <NavLink exact to="/" className={style.navLink} activeClassName={style.activNavLink}>Home</NavLink>
            <NavLink to="/about" className={style.navLink} activeClassName={style.activNavLink}>About</NavLink>
        </nav>
    )
}

export default Navigation