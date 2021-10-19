import { NavLink, useRouteMatch } from 'react-router-dom'
import style from './SubNavigation.module.css'


const SubNavigation = () => {
    const { url } = useRouteMatch();
    
    return (
    <>
    <NavLink exact to={`${url}/active`} className={style.navLink} activeClassName={style.activNavLink}>Active</NavLink>
    <NavLink to={`${url}/archive`} className={style.navLink} activeClassName={style.activNavLink}>Archive</NavLink>
    </>
    )
}
   
export default SubNavigation