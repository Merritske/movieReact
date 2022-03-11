import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"


export default function Contain() {
  return (
    
        <Container fluid="md">
<div className="kolom">
    <Row>
    <Col md={6}>
    1 of 3
    </Col>
    <Col>
    2 of 3
    </Col>
    <Col>
    3 of 3
    </Col>
</Row>
</div>
<Form>
    <Button variant="primary" type="submit">
    Submit
</Button>
<Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>



        </Container>
   
  )
}
