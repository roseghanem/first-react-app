import React from 'react';
import  { useState } from 'react';
 import {
   AppBar,
   Toolbar,
   Typography,
   IconButton,
   Menu,
   MenuItem,
   Box,
   Button,
   Drawer,
   List,
   ListItem,
   ListItemText,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   TextField,
   InputLabel,
   Link,
   Image,
   Grid,Container,
   CssBaseline
 } from '@mui/material';
 import MenuIcon from '@mui/icons-material/Menu';
 import { createTheme, ThemeProvider } from '@mui/material/styles';
 import backgroundImage from '../assets/svg/Rectangle82.png';
import { Gradient } from '@mui/icons-material';

 
const Home = ({ handleOpenLogin, handleOpenSignup, handleOpenLogout }) => {

     const [anchorEl, setAnchorEl] = useState(null);
   const [drawerOpen, setDrawerOpen] = useState(false);

   const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
       };

  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };
 const menuItems = ['العقارات', 'حول', 'برامج الجنسية لدى اسيسفاي', 'البيع','المزيد'];
 const backgroundImageStyle = {
  background: `linear-gradient(
   "#0A0E3F", 
    "#6B48FF"
  ), url(${backgroundImage})`,
  backgroundPosition: 'center',
  height: '777px',
  width:"1520px",
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
};

  const renderMenu = (
    <Menu sx={{ direction: 'rtl' }}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      {menuItems.map((item, index) => (
        <MenuItem key={index} onClick={handleMenuClose}>
          {item}
        </MenuItem>
      ))}
    </Menu>
  );
     const renderDrawer = (
    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

   const theme = createTheme({
  direction: 'rtl',
});


   return (
     <ThemeProvider theme={theme}>
       <CssBaseline />
       <Box style={backgroundImageStyle}

        >
         <AppBar position="static">
        
           <Toolbar sx={{backgroundColor:"#F2F4F6"}}>
           <Button sx={{color:"#1EE3CF",backgroundColor:"#161D6F"}} onClick={handleOpenSignup}>
                 ابدأ
               </Button>
                <Button sx={{color:"#161D6F",backgroundColor:"#F2F4F8",border:"1px"}} onClick={handleOpenLogin}>
                 سجل الدخول
               </Button>
               <Box sx={{ display: { xs: 'none', md: 'block' },direction:"rtl", flex: 8, color:"#161D6F"}}>
               {menuItems.map((item, index) => (
                 <Button key={index} color="inherit">
                   {item}
                 </Button>
               ))}

             </Box>
             <Typography variant="h4" sx={{ flexGrow: 1 ,direction:"rtl",color:"#161D6F"}}>
              Assistify
             </Typography>

             <Box sx={{ display: { xs: 'block', md: 'none' } }}>
               <IconButton
                 edge="end"
                 color="inherit"
                 aria-label="menu"
                 onClick={handleMenuOpen}
               >
                 <MenuIcon />
               </IconButton>
             </Box>
           </Toolbar>
         </AppBar>

         <Container >
         <Typography  sx={{
           fontFamily: "Noor",
           color:"#1EE3CF",
           fontSize: "22px",
           fontWeight: "400",
           lineHeight: "26.4px",

           }} align="center" >
         Assetify  أحصل على الإقامة التركية بكل سهولة مع  </Typography>
         <Typography sx={{
           fontFamily: "Noor",
           color:"#FFFFFF",
           fontSize: "50px",
           fontWeight: "400",
           lineHeight: "60px",
           top:"155px"
           }} align="center" >
         استثمر من أي مكان في العالم واحصل  </Typography>
         <Typography sx={{
           fontFamily: "Noor",
           color:"#FFFFFF",
           fontSize: "50px",
           fontWeight: "400",
           lineHeight: "60px",
           }} align="center" >
          على الإقامة التركية </Typography>
         <Typography sx={{
           fontFamily: "Noor",
           color:"#1EE3CF",
           fontSize: "22px",
           fontWeight: "400",
           lineHeight: "26.4px",
           }} align="center" >
         استمتع بمجموعة من الفوائد عن طريق استثمار الحد الأدنى 200,000 دولار أمريكي من خلال منصتنا.</Typography>
         <Typography sx={{
           fontFamily: "Noor",
           color:"#1EE3CF",
           fontSize: "22px",
           fontWeight: "400",
           lineHeight: "26.4px",
           }} align="center" >
         . 200,000 دولار أمريكي من خلال منصتنا</Typography>

       </Container>

         <AppBar position="fixed"  sx={{ top: 'auto', bottom: 0, backgroundColor:"#0A0E3F",height:"150px"}}>
         <Toolbar>
           <Container maxWidth="sm">
             <Typography variant="body1" align="center" color="#FFFFFF" 
             sx={{
               fontWeight:"700",
               fontSize:"50px",
               top:"107px",
               left:"562.62px",
               width:"841px",
               height:"60px",
               textAlign:"center"
             }}>
             +Assetify قم بالإرتقاء تلقائياً إلى فئة 
             </Typography>
           </Container>
         </Toolbar>
       </AppBar>
       {renderMenu}
        {renderDrawer}
       </Box>
      
     </ThemeProvider>
   );

  
};

export default Home;











