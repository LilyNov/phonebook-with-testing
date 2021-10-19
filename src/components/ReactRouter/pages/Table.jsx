import Container from '../../Container'
import { useEffect } from 'react'
import SubNavigation from '../SubNavigation'
import { Route, useRouteMatch, useHistory } from 'react-router-dom'

import Active from './Active'
import Archive from './Archive'
import TitleOfPage from '../../TitleOfPage'




const Table = () => {
    const { path } = useRouteMatch();
    const activTab = '/table/active'
    let history = useHistory()

    useEffect(() => {
        if (history.location.pathname === '/table') {
        history.push(activTab)
        }
    }, [])

    return (
        <Container testid="table-page">
            <TitleOfPage >
                Samples list
            </TitleOfPage>
            <SubNavigation />
            
            <Route path={`${path}/active`} >
                <Active />
            </Route>

            <Route path={`${path}/archive`}>
                <Archive />
            </Route>
            
        </Container>
            )
    }
export default Table