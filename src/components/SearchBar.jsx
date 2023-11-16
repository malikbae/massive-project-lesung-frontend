import { Button, Col, Container, Form, Row } from "react-bootstrap";

function SearchBar() {
  return (
    <div className="search-bar">
      <Container>
        <Row>
          <Col className="p-0">
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Matematika" className="rounded-pill ps-4" aria-label="Search" />
              <Button className="rounded-pill">Cari Kelas</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SearchBar;
