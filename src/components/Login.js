import React, { useState } from 'react';
import { Button,IconButton,Box,Link,InputLabel,Container, Dialog, DialogActions, DialogContent, TextField, DialogTitle } from '@mui/material';
import { ReactComponent as FacebookIcon } from '../assets/svg/Facebook.svg';
import { ReactComponent as GoogleIcon } from '../assets/svg/Google.svg';
import { ReactComponent as AppleIcon } from '../assets/svg/Apple.svg';
const Login = ({ open, handleClose, handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{
         textAlign:"center",fontFamily: "Noor",fontSize: "34px",fontWeight: "700",lineHeight: "40.8px",}}>
        تسجيل الدخول</DialogTitle>
      <DialogContent sx={{direction:"rtl",  borderRadius:"21px",
             border:"1px",  height: "845px",width:"645px",left:"360px" ,padding: "31.5px",
             gap: "31.5px",
             backgroundColor:"#FFFFFF",
             color:"#0A0E3F",
            }}>
      <Container sx={{            
             fontSize:"34px",
             height: "60px",
             top: "50px",
             left: "48px",
             fontFamily:"Noor",
             fontWeight:"400",
             }}>
         <InputLabel  htmlFor="my-input" sx={{direction:"rtl"}}>الايميل أو رقم الهاتف</InputLabel>
         <TextField sx={{width:"500px",height:"105px"}} autoFocus margin="dense" type="email" fullWidth />
         <InputLabel htmlFor="my-input">كلمة المرور</InputLabel>
         <TextField sx={{width:"500px",height:"105px"}}  margin="dense" type="password" fullWidth />
         <DialogActions>
          <Button autoFocus margin="secondary" onClick={() => handleLogin(email, password)}  fullWidth 
         sx={{
           fontWeight:"700",
             backgroundColor:"#1EE3CF",
             color:"#0A0E3F",
             borderRadius: "21px",
             lineHeight: "24px",
             fontSize: "25px",
             width: "500px",
             height:"60px",
             top:"-10px"
           }}>تسجيل الدخول</Button>
        
      </DialogActions>
      <Box sx={{ display: 'flex', textAlign: 'center', gap: 2,width: "539px",height: "50px",top: "592px",left: "101px",fontFamily:"Noor",fontWeight:"400",fontSize:"18px",lineHeight:"21.6px"}}>
       <InputLabel >ليس لديك حساب؟</InputLabel>
         <Link href="#" sx={{width: "252px",height: "22px",top: "527px",left: "292px",}}>
           إنشاء حساب
         </Link>
         <Link href="#" sx={{width: "145px",height: "22px",top: "527px",left: "101px",}}>
          نسيت كلمة المرور
         </Link>
     </Box>
     <Box sx={{textAlign: 'center', width: "539px",height: "29px",top: "592px",left: "53px",borderRadius:"74px 75px 74px 74px",fontFamily:"Noor",fontWeight:"400",fontSize:"14px",lineHeight:"21.6px"}}>
     أو
     </Box>
     <Box sx={{ display: 'flex' ,width:"500.5px",left:"40px",  borderRadius:"21px", padding:"10px 1px 10px 10px", gap:"5px" }}>
       <IconButton aria-label="Facebook">
         <FacebookIcon width="150px" height="60px" top="697px" left="418.5px"/>
       </IconButton>
       <IconButton aria-label="Apple">
         <AppleIcon width="167px" height="60px" top="697px" left="233px"/>
       </IconButton>
       <IconButton aria-label="Google">
         <GoogleIcon width="161px" height="55px" top="699px" left="51px" />
       </IconButton>
     </Box> 
       </Container>

    </DialogContent>

    </Dialog>
  );
};

export default Login;