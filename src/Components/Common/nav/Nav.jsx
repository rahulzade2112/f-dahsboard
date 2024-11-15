 import React from "react";
import { Link,Navigate, useNavigate } from "react-router-dom";
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import "./nav.css"
const Nav = () => {
 
  const navigate = useNavigate();

  return (
    <div>
      <div className="sidenavcontainer">
        <ul>
          <Link to="/"><li>Dashboard</li></Link>

          <Link to="/account"><li>Account</li></Link>

          <Link to="/products"><li>Products List</li></Link>

          <Link to="/addproduct"><li>Add Products</li></Link>

          <button
           onClick={()=>{localStorage.removeItem("token"); 
          navigate("/")}}>Sign out</button>
        </ul>
      </div>
    </div>
  )
}


export default Nav;
// const drawerWidth = 160;
// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));
// const [open, setOpen] = React.useState(false);
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  // return (
  //   <div>
       
  //   </div>
  // );
//   <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
     
//       <Drawer
//         sx={{
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//       <IconButton color='variant' onClick={handleDrawerClose}
// >
//   close
// </IconButton>
//          </Drawer>
//         <Toolbar>
//             {
//             open === true ?
//              (
//                 <IconButton onClick={handleDrawerClose}
//                 sx={{ marginTop: "55%"}}>
//               <ArrowLeftIcon  color="#757ce8"
//                   sx={{marginTop: "55%",
//                   marginLeft:"17%",
//                     position:"fixed",
//                     backgroundColor: "white",
//                     borderRadius: "50%",
//                     fontSize: "60px",
//                     zIndex:"500000"
//                   }} />
                              
//                 </IconButton>
//              ) : (
//                 <IconButton
//                 onClick={handleDrawerOpen}
//                 aria-label="open drawer"
//                 edge="start"
//                 sx={{ marginLeft: "-20px",marginRight: "0", position: "fixed", marginTop: "55%" }}
//                 >
//                 <ArrowRightIcon
//                   color="#757ce8"
//                   sx={{
//                     backgroundColor: "white",
//                     borderRadius: "50%",
//                     fontSize: "60px",
//                     position: "fixed",
//                   }}
//                 ></ArrowRightIcon>
//                 </IconButton>
//               )
//             }
//           </Toolbar> 
//     </Box>