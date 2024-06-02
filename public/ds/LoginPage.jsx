///import React, { useState } from 'react';
import { Col,Container, Row,Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import LoginForm from './LogIn';
import backgroundImage from '../assets/svg/pngegg.svg';
// import sideImage from '../assets/svg/pngegg.svg';

const LoginPage = () => {
  return (
    <Container fluid className="login-page">
      <Row>
        <Col md={3} className="login-image-container">
          {/* <div
            className="login-side-image-container"
            style={{
              backgroundImage: `url(${sideImage})`,
       //       backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',

            }}
          ></div> */}
        </Col>
        <Col md={6} className="login-form-container">
          {/* <div className="login-side-image-container">
            <Image src={sideImage} fluid />
          </div> */}
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;