import {withRouter, Link} from "react-router-dom";
import style from '../Breadcrumbs/Breadcrumbs.module.css'

const Breadcrumbs = (props) => {
  const {history, location: {pathname}} = props
  const pathnames = pathname.split('/').filter(comma => comma)
  
 return(
   <div className={style.breadcrumbs} data-testid="breadcrumbs">
   {pathnames.length > 0 ? <Link to='/' className={style.link} onClick={() => history.push('/')}>Home / </Link> : <span>Home</span>}

   {pathnames.map((link, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
      const isLastLink = index === pathnames.length - 1
      return isLastLink ? <span key={link}>{link}</span> : <Link to={link} key={link} className={style.link} onClick={() => history.push(routeTo)}>{link} /</Link>
   })}
   </div>
 )
}

export default withRouter(Breadcrumbs)