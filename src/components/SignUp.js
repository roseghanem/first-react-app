import React, { useState } from 'react';
import { Button,DialogContentText,Typography,Grid,IconButton,Box,Link,InputLabel,Container, Dialog, DialogActions, DialogContent, TextField, DialogTitle } from '@mui/material';
import { ReactComponent as FacebookIcon } from '../assets/svg/Facebook.svg';
import { ReactComponent as GoogleIcon } from '../assets/svg/Google.svg';
import { ReactComponent as AppleIcon } from '../assets/svg/Apple.svg';
import { useDropzone } from 'react-dropzone';

const Signup = ({ open, handleClose, handleSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [files, setFiles] = useState([]);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [userDetails, setUserDetails] = useState({
         email: '',
         password: '',
       });

   const handleVerification = () => {
     if (verificationCode === '123456') {
       setIsVerified(true);
     } else {
       alert('Verification code is incorrect!');
     }
   };
     const onDrop = (acceptedFiles) => {
     setFiles([...files, ...acceptedFiles]);
   }; 
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Dialog maxWidth="lg"
    sx={{width: "1603px",height: "700px",left: "100px",borderRadius:"19px"}}
     open={open} onClose={handleClose}>
       <DialogTitle 
        sx={{textAlign:"center",fontFamily: "Noor",left:"683px",fontSize: "34px",fontWeight: "700",lineHeight: "40.8px",color:"#0A0E3F"}}>
         إنشاء حساب 
       </DialogTitle>

      <DialogContent sx={{direction:"rtl"}}>
             <Grid container spacing={5} sx={{            
             }}>
             <Grid item xs={12} md={6}>
             <Box
             component="form"
                 sx={{
             display: 'flex',
             flexDirection: 'column',
              width:"550px",
              borderRadius:"20px",
              border:"1px",
              height: "228px",
              top: "25px",
              left: "48px",
              padding: "31.5px",
             position:"inherit",
              fontFamily:"Noor",
              fontWeight:"400",
                 }}
               >
                 <Typography   htmlFor="my-input">الايميل </Typography>
                 <TextField variant="standard" autoFocus margin="dense" type="email" fullWidth />
                 <Typography htmlFor="my-input">اسم المستخدم</Typography>
                 <TextField  variant="standard" margin="dense" type="password" fullWidth />
                 <Typography  htmlFor="my-input">رقم الهاتف </Typography>
                 <TextField variant="standard" autoFocus margin="dense" type="email" fullWidth />
                 <Typography htmlFor="my-input">كلمة المرور </Typography>
                 <TextField  variant="standard" margin="dense" type="password" fullWidth />
                 <Typography htmlFor="my-input">كلمة المرور</Typography>
                 <TextField variant="standard"  margin="dense" type="password" fullWidth />
               </Box>
             </Grid>
             <Grid item xs={12} md={6}>
             <InputLabel  htmlFor="my-input">الصورة الشخصية </InputLabel>
               <Box
                 {...getRootProps()}
                 sx={{
                   border: '1px dashed grey',
                   backgroundColor:"#E1DAFF",
                   borderRadius: '20px',
                   height: '153.95px',
                   top:"50px",
                   left:"195px",
                   width:"551px",
                   display: 'flex',
                   justifyContent: 'center',
                   alignItems: 'center',
                   flexDirection: 'column',
                   gap: 0,
                  
                 }}
               >
                 <input {...getInputProps()} />
                 <Typography variant="body1">اسحب و افلت الصورة هنا او قم برفعها من الملفات</Typography>
                 {files.length > 0 && (
                   <Box mt={2}>
                     <Typography variant="body2">Files:</Typography>
                     <ul>
                       {files.map((file) => (
                         <li key={file.path}>{file.path}</li>
                       ))}
                     </ul>
                   </Box>
                 )}
               </Box>
               <InputLabel  htmlFor="my-input">اثبات شخصية </InputLabel>
               <Box
                 {...getRootProps()}
                 sx={{
                   border: '1px dashed grey',
                   backgroundColor:"#E1DAFF",
                   borderRadius: '20px',
                   height: '149.74px',
                    top:"50px",
                   left:"195px",
                   width:"551px",
                   display: 'flex',
                   justifyContent: 'center',
                   alignItems: 'center',
                   flexDirection: 'column',
                   gap: 2,
                 }}
               >
                 <input {...getInputProps()} />
                 <Typography variant="body1">اسحب و افلت الصورة هنا او قم برفعها من الملفات</Typography>
                 {files.length > 0 && (
                   <Box mt={2}>
                     <Typography variant="body2">Files:</Typography>
                     <ul>
                       {files.map((file) => (
                         <li key={file.path}>{file.path}</li>
                       ))}
                     </ul>
                   </Box>
                 )}
               </Box>
               <Button autoFocus margin="secondary" onClick={() => handleSignup(email, password)} fullWidth 
               sx={{
               gap: 5,
               width:"550px",
               borderRadius:"21px",
               backgroundColor:"#1EE3CF",
               color:"#0A0E3F",
               height: "50px",
               top: "20px",
               }} >
                   إنشاء حساب
                 </Button> 
                 <Box sx={{ display: 'flex', textAlign: 'center', gap: 1,width: "250px",height: "22px",top: "608px",left: "507px",fontFamily:"Noor",fontWeight:"400",fontSize:"18px",lineHeight:"21.6px"}}>
                   <InputLabel sx={{top:"30px"}}> لديك حساب؟</InputLabel>
                    <InputLabel href="#" sx={{top: "30px"}}>تسجيل الدخول </InputLabel>
             </Box>
          
             </Grid>

             <Grid item xs={12} md={6} sx={{  display:"flex",textAlign:"center",top:"1000px",width:"500.5px",left:"466px",height:"69.59px",  borderRadius:"21px", padding:"10px 1px 10px 10px"}}>
             <Box >
               <IconButton aria-label="Facebook">
                 <FacebookIcon width="160px" height="60px" left="418.5px"/>
               </IconButton>
               <IconButton aria-label="Apple">
                 <AppleIcon width="160px" height="60px"  left="233px"/>
               </IconButton>
               <IconButton aria-label="Google">
                 <GoogleIcon width="160px" height="55px"  left="51px" />
               </IconButton>
     </Box> 
       </Grid>  
 
       </Grid>
      </DialogContent>

    </Dialog>
  );
};

export default Signup;





// const SignUp = () => (
//   <div className="container">
//     <h1>Sign Up</h1>
//     <form>
//       <div className="mb-3">
//         <label htmlFor="username" className="form-label">Username</label>
//         <input type="text" className="form-control" id="username" />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="email" className="form-label">Email address</label>
//         <input type="email" className="form-control" id="email" />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="password" className="form-label">Password</label>
//         <input type="password" className="form-control" id="password" />
//       </div>
//       <button type="submit" className="btn btn-primary">Sign Up</button>
//     </form>
//   </div>
// );

// export default SignUp;