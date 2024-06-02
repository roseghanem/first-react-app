// import React from 'react';

// const Logout = () => (
//   <div className="container">
//     <h1>Logout</h1>
//     <p>You have been logged out. Thank you for visiting!</p>
//   </div>
// );

// export default Logout;
import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const Logout = ({ open, handleClose, handleLogout }) => {
  return (
    <Dialog open={open} onClose={handleClose}
      sx={{
      width: "720px",
      height: "461px",
      left: "360px",
      top:"110px",
      borderRadius: "19px",
      textAlign:"center"
    }}>
      <DialogTitle sx={{ fontWeight:"700",fontSize:"34px",lineHeight:"40.8px", width:"600px",height:"41px",textAlign:"center",color:"#0A0E3F"}}>هل انت متأكد من تسجيل الخروج</DialogTitle>
      <DialogContent 
      sx={{
        width:"720px",
        height:"461px",
        top:"110px",
        left:"116px"
      }}>
       <Button onClick={() => handleLogout} fullWidth  sx={{
          display:"flex",
         textAlign:"center",
            fontWeight:"700",
             backgroundColor:"#1EE3CF",
              color:"#0A0E3F",
              borderRadius: "21px",
              lineHeight: "24px",
              fontSize: "25px",
              width: "550px",
              height:"60px",
              padding:"31.5px",
              gap:"31.5px",
              top:"50px",
            //  left:"116px"
           }}>تأكيد</Button>
          <Button onClick={()=> handleClose}
          sx={{ display:"flex",
          textAlign:"center",
           fontWeight:"700",
             backgroundColor:"#D9D9D9",
             color:"#0A0E3F",
             borderRadius: "21px",
             lineHeight: "24px",
             fontSize: "25px",
             width: "550px",
             height:"60px",
             padding:"31.5px",
            gap:"31.5px",
            border:"1px",
       //     left:"116px",
             top:"100px"}}
          > تراجع</Button> 
      </DialogContent>
      <DialogActions>
       
          </DialogActions>
    </Dialog>
  );
};

export default Logout;