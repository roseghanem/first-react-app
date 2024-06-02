import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col } from 'react-bootstrap';
import '../css/homePage.css'; 
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };
  return (
    <div className="home-page">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Assistify</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
              <Nav.Link href="#home">العقارات</Nav.Link>
              <Nav.Link href="#link">حول</Nav.Link>
              <Nav.Link href="#link">برامج الجنسية لدى اسيستفاي</Nav.Link>
              <Nav.Link href="#link">البيع</Nav.Link>
              <Nav.Link href="#more">المزيد</Nav.Link>
            </Nav>
            <Button variant="outline-dark" className="me-auto" onClick={handleLoginClick()} >سجل الدخول</Button>
            <Button variant="primary" className="me-2">ابدأ</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="hero-section">
        <Row className="text-center text-white">
          <Col >
            <p className='text-center text-info'>احصل على الإقامة التركية بكل سهولة مع Assetify</p>
            <h1> استثمر من أي مكان في العالم واحصل</h1>
            <h1> على الإقامة التركية</h1>
            <p className='text-center text-info'>استمتع بمجموعة من الفوائد عن طريق استثمار الحد الأدنى ,</p>
            <p className='text-center text-info'>  دولار أمريكي من خلال منصتنا </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;