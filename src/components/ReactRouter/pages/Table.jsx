import { Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import TableRender from '../../TableRender'

const Table = () => <Container data-testid='table-page' style={{ marginTop: 100 }}><TableRender /></Container>
export default Table