import React, { useContext } from 'react';
import {ReactComponent as Logo} from '../../Asset/Logo.svg';
import {IconButton, AppBar, makeStyles, Toolbar, Button, styled, Typography, Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { purple } from '@material-ui/core/colors';
import  './Header.css';
import makeStyle from '@material-ui/core';
import { border, Box, grid } from '@mui/system';
import { Stack } from '@mui/material';
import { AuthContext } from '../../auth';

import { Menu, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#ffffff",
    },
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));



const Header = props => {
    const { header } = useStyles();
    const { history } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const {isAuthenticated, logout} = useContext(AuthContext)

    function handleButtonLogout(event) {
      event.preventDefault();
      logout();
      history.push('/')
    }

    function handleButtonProfil(event){
      event.preventDefault();
      history.push('/profil');
    }
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleButtonClick = pageURL =>{
      history.push(pageURL);
    };


  return (
    <header>
      <Box >
      <AppBar position="static" className={header}>
        <Toolbar>
          <Grid
          justifyContent='flex-start'
          direction='row'
          alignItems='flex-start'
          container
          spacing={2}>
            <Grid item xs={4}
            align='left'>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 5 }}
              >
              <Logo/>
              </IconButton>
              </Grid>
            </Grid>
            {isAuthenticated ? (
              <div>
              <Stack direction='row' spacing={5} justifyContent='center'>
              <Button
                onClick={() => handleButtonClick("/dashboard")}>
                  dashboard
                </Button>
                <Button
                onClick={() => handleButtonClick("/status")}>
                  status
                </Button>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Button>ini profil</Button>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleButtonProfil}>Profile</MenuItem>
                <MenuItem onClick={handleButtonLogout}>Log out</MenuItem>
              </Menu>
              </Stack>
              
            </div>
            ) : (
          
              <Stack direction='row' spacing={5} justifyContent='center'>
                <Button
                onClick={() => handleButtonClick("/")}>
                  Home
                </Button>
                <Button
                onClick={() => handleButtonClick("/about")}>
                  About
                </Button>
                <ColorButton 
                   onClick={() => handleButtonClick("/login")}>Login</ColorButton>
                <Button variant='outlined'
                   onClick={() => handleButtonClick("/signup")}>sign up</Button>
              </Stack>
          
            ) }
            
              
          

        </Toolbar>
      </AppBar>
    </Box>
      
    </header>
  );
}
export default withRouter(Header);