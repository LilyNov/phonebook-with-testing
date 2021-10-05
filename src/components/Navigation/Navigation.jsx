import { NavLink } from 'react-router-dom'
import style from '../Navigation/Navigation.module.css'


const Navigation = () => {
    return (
        <nav className={style.nav}>
            <NavLink exact to="/" className={style.navLink} activeClassName={style.activNavLink}>Home</NavLink>
            <NavLink to="/news" className={style.navLink} activeClassName={style.activNavLink}>News</NavLink>
            <NavLink to="/table" className={style.navLink} activeClassName={style.activNavLink}>Table</NavLink>
        </nav>
    )
}

export default Navigation