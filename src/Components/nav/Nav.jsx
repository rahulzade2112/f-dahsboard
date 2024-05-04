import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';// import { styled, useTheme } from "@mui/material/styles";
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
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import "./nav.css"

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${0}px`,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   }),
// );

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  // transition: theme.transitions.create(['margin', 'width'], {
  //   easing: theme.transitions.easing.sharp,
  //   duration: theme.transitions.duration.leavingScreen,
  // }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));

const drawerWidth = 160;

const Nav = () => {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
         <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
      <IconButton color='variant' onClick={handleDrawerClose}
>
  close
</IconButton>
         </Drawer>
      
        {/* <Divider /> */}
        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        {/* <Divider /> */}
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
     
      
      
      
      
      
      {/* <AppBar position="fixed" open={open}> */}
        {/* <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar> */}
      {/* </AppBar> */}


        <Toolbar>
            {
            open === true ?
             (
                <IconButton onClick={handleDrawerClose}
                sx={{ marginTop: "55%"}}>
              <ArrowLeftIcon  color="#757ce8"
                  sx={{marginTop: "55%",
                  marginLeft:"17%",
                    position:"fixed",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    fontSize: "60px",
                    zIndex:"500000"
                  }} />
                              
                </IconButton>


             ) : (

                <IconButton
                onClick={handleDrawerOpen}
                aria-label="open drawer"
                edge="start"
                sx={{ marginLeft: "-20px",marginRight: "0", position: "fixed", marginTop: "55%" }}
                >
                <ArrowRightIcon
                  color="#757ce8"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    fontSize: "60px",
                    position: "fixed",
                  }}
                ></ArrowRightIcon>
                </IconButton>
              )
            }
          </Toolbar> 
    </Box>
    </div>
  );
};

export default Nav;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(0),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     marginTop:0,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,    marginTop:0,

//     }),
//   })
// );

// const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };
//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

{/* <Box sx={{ display: "flex", marginTop:"-64px" }}>
   <Main open={open}   >
          <Toolbar>
            {
            open === true ?
             (
                <IconButton 
                onClick={handleDrawerClose}
                sx={{ marginLeft: "-20px", marginTop: "55%"}}>
              <ArrowLeftIcon  color="#757ce8"
                  sx={{
                    position:"fixed",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    fontSize: "60px",
                    zIndex:"500000"
                  }} />
                              
                </IconButton>
             ) : (

                <IconButton
                onClick={handleDrawerOpen}
                aria-label="open drawer"
                edge="start"
                style={{ marginRight: 0 }}
                sx={{ marginLeft: "-15px", position: "fixed", marginTop: "55%" }}
                >
                <ArrowRightIcon
                  color="#757ce8"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    fontSize: "60px",position: "fixed",
                  }}
                ></ArrowRightIcon>
                </IconButton>
              )
            }
          </Toolbar> 
          
        </Main> 

         <Drawer 
          sx={{
            width: drawerWidth,
            // flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              boxShadow: "revert-layer",
              marginTop:"85px",
              padding:"0"
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
<button  onClick={handleDrawerClose}>
close
</button>
        </Drawer>

      </Box> */}