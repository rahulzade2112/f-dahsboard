import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, InputBase } from '@mui/material';
import { Menu as MenuIcon, Notifications as NotificationsIcon, AccountCircle } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import "./header.css"
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  // height:"70px",
  [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: { width: '60ch' },
  },
}));
const Header = () => {
  return (
    <div>
<AppBar sx={{height:"76px"}} position="fixed">
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          LOGO
        </Typography>
        <Search>
          <SearchIconWrapper>🔍
            {/* Place your search icon here */}
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>

      {/* className="headercontainer" */}
      {/* <header > */}
        {/* <Link to="/"> </Link>
        <input
          type="text"
          className="header-input"
          placeholder="🔍 Search" */}
          {/* //  onChange={handleChange}
        // ></input> */}

        {/* <div className="user-details"> */}
          {/* src={bell} */}
          {/* <img className="notification" alt="ds"></img>
          <p className="user-name">rahul zade</p>
          <div className="dp">
            <img */}
              {/* // src={decodedData?.userexist.avatar}
              style={{
                marginTop: "-5px",
                height: "55px",
                width: "55px",
                borderRadius: "50%",
              }}
            ></img>
          </div>
        </div>
      </header> */}
    </div>
  );
};

export default Header;
