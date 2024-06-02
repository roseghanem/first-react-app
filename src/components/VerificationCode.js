import React, { useState } from 'react';
import { Button,OutlinedInput, Dialog, DialogActions, DialogContent, TextField, DialogTitle, Typography } from '@mui/material';
import { Rectangle } from '@mui/icons-material';

const VerificationCode = ({ open, handleClose, handleVerify }) => {
  const [code, setCode] = useState('');

  return (
    <Dialog open={open} onClose={handleClose}
    sx={{
      width: "645px",
      height: "688px",
      left: "360px",
      borderRadius: "19px",
      textAlign:"center"
    }}
    >
      <DialogTitle > مرحبا بك RED</DialogTitle>
      <Typography sx={{direction:"rtl"}}>
      لقد تم ارسال رمز التأكيد الى: (red1234@gmail.com)
      </Typography>
      <DialogContent sx={{ width: "645px", height: "688px",textAlign:"center",display:"flex"}}>
      <OutlinedInput   onChange={(e) => setCode(e.target.value)} sx={{
        width: "60px",
        height: "60px",
        top: "20px",
        left: "105px",
        borderRadius: "10px",
        border: "1px",
        color:"#ACACAC"
      }}>

      </OutlinedInput>
      <OutlinedInput   onChange={(e) => setCode(e.target.value)} sx={{
        width: "60px",
        height: "60px",
        top: "20px",
        left: "110px",
        borderRadius: "10px",
        border: "1px",
        color:"#ACACAC"
      }}>

      </OutlinedInput>
      <OutlinedInput   onChange={(e) => setCode(e.target.value)} sx={{
        width: "60px",
        height: "60px",
        top: "20px",
        left: "115px",
        borderRadius: "10px",
        border: "1px",
        color:"#ACACAC"
      }}>

      </OutlinedInput>
      <OutlinedInput   onChange={(e) => setCode(e.target.value)} sx={{
        width: "60px",
        height: "60px",
        top: "20px",
        left: "120px",
        borderRadius: "10px",
        border: "1px",
        color:"#ACACAC"
      }}>

      </OutlinedInput>

      <OutlinedInput   onChange={(e) => setCode(e.target.value)} sx={{
        width: "60px",
        height: "60px",
        top: "20px",
        left: "125px",
        borderRadius: "10px",
        border: "1px",
        color:"#ACACAC"
      }}>

      </OutlinedInput>
      <OutlinedInput   onChange={(e) => setCode(e.target.value)} sx={{
        width: "60px",
        height: "60px",
        top: "20px",
        left: "130xpx",
        borderRadius: "10px",
        border: "1px",
        color:"#ACACAC"
      }}>
      </OutlinedInput>
      <Typography sx={{
        fontWeight:"400",
        lineHeight: "24px",
        fontSize: "22px",
        width: "467px",
        height: "26px",
        top: "400px",
        left:"450px",
        borderRadius: "10px",
        border: "1px",
        position:"fixed"
      }}>
      اذا لم يصلك الرمز يمكنك اعادة المحاولة بعد 4:20د
      </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleVerify(code)}  sx={{
          textAlign:"center",
           fontWeight:"700",
             backgroundColor:"#1EE3CF",
             color:"#0A0E3F",
             borderRadius: "21px",
             lineHeight: "24px",
             fontSize: "25px",
             width: "500px",
             height:"60px",
             top:"-300px"
           }}>تأكيد</Button>
          <Button
          sx={{
          textAlign:"center",
           fontWeight:"700",
             backgroundColor:"#ACACAC",
             color:"#0A0E3F",
             borderRadius: "21px",
             lineHeight: "24px",
             fontSize: "25px",
             width: "500px",
             height:"60px",
             top:"-300px"}}
          >إعادة الارسال</Button>
      </DialogActions>
     
    </Dialog>
  );
};

export default VerificationCode;




// import React from 'react';

// const VerificationCode = () => (
//   <div className="container">
//     <h1>Verification Code</h1>
//     <form>
//       <div className="mb-3">
//         <label htmlFor="code" className="form-label">Verification Code</label>
//         <input type="text" className="form-control" id="code" />
//       </div>
//       <button type="submit" className="btn btn-primary">Verify</button>
//     </form>
//   </div>
// );

// export default VerificationCode;