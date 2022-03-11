import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

export default function Contain() {
  return (
    
        <Container fluid>
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


        </Container>
   
  )
}
