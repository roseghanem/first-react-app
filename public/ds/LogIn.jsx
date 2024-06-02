import htmlContent from '../htmls/login.html';

const HtmlLogInContent = () => {
 return (
     <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
 };

export default HtmlLogInContent;
// import React, { useState } from 'react';
// import { Form, Button,Row } from 'react-bootstrap';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//   };
//   return (
//     <div className="login-form">
//       <h2 className="text-center mb-4">تسجيل الدخول</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>أدخل الايميل أو رقم الهاتف</Form.Label>
//           <Form.Control
//             type="email"
            
//             placeholder=""
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>كلمة المرور</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder=""
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           تسجيل الدخول
//         </Button>
//       </Form>

//     </div>
//   );
// };

// export default LoginForm;