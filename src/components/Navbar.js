import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col } from 'react-bootstrap';
import '../css/HomePage.css'; 
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
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => (
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <div className="container-fluid">
//       <Link className="navbar-brand" to="/">Assistify</Link>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link className="nav-link" to="#">العقارات</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="#">حول</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="#">برامج الجنسية لدى اسيستفاي</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="#">البيع</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="#">المزيد</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// );

// export default Navbar;