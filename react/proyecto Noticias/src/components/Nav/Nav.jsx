import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import PublicIcon from '@mui/icons-material/Public';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { UserContext } from '../Context/UserContest';

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { logOut, user } = React.useContext(UserContext);
  const navigate = useNavigate();

  const handleClickLogOut = () => {
    logOut();
    navigate('/');
  };

  return (
    <>
      {user && (
        <AppBar position="fixed">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <PublicIcon
                sx={{ fontSize: 50, display: { xs: 'none', md: 'flex' }, mr: 1 }}
              />
              <NavLink to="/Noticias">
                <Typography
                  variant="h3"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },

                    fontWeight: 900,
                    letterSpacing: '.4rem',
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'navy',
                    },
                  }}
                >
                  NOTICIAS
                </Typography>
              </NavLink>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    sx={{
                      backgroundColor: 'rgb(25,118,211)',
                      '&:hover': {
                        backgroundColor: 'navy',
                      },
                    }}
                  >
                    <Typography textAlign="center">
                      <NavLink to="/Economía">
                        <Typography
                          variant="h6"
                          noWrap
                          sx={{
                            mr: 2,
                            ml: 2,
                            fontWeight: 500,
                            letterSpacing: '.1rem',
                            color: 'white',
                            textDecoration: 'none',
                          }}
                        >
                          Economía
                        </Typography>
                      </NavLink>
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    sx={{
                      backgroundColor: 'rgb(25,118,211)',
                      '&:hover': {
                        backgroundColor: 'navy',
                      },
                    }}
                  >
                    <Typography textAlign="center">
                      <NavLink to="/Tecnología">
                        <Typography
                          variant="h6"
                          noWrap
                          sx={{
                            mr: 2,
                            ml: 2,
                            fontWeight: 500,
                            letterSpacing: '.1rem',
                            color: 'white',
                            textDecoration: 'none',
                          }}
                        >
                          Tecnología
                        </Typography>
                      </NavLink>
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    sx={{
                      backgroundColor: 'rgb(25,118,211)',
                      '&:hover': {
                        backgroundColor: 'navy',
                      },
                    }}
                  >
                    <Typography textAlign="center">
                      <NavLink to="/Deportes">
                        <Typography
                          variant="h6"
                          noWrap
                          sx={{
                            mr: 2,
                            ml: 2,
                            fontWeight: 500,
                            letterSpacing: '.1rem',
                            color: 'white',
                            textDecoration: 'none',
                          }}
                        >
                          Deportes
                        </Typography>
                      </NavLink>
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
              <PublicIcon
                sx={{ fontSize: 50, display: { xs: 'flex', md: 'none' }, mr: 1, ml: 1 }}
              />
              <NavLink to="/Noticias">
                <Typography
                  variant="h3"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontWeight: 900,
                    letterSpacing: '.2rem',
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'navy',
                    },
                  }}
                >
                  NOTICIAS
                </Typography>
              </NavLink>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <NavLink to="/Economía">
                  <Typography
                    variant="h6"
                    noWrap
                    sx={{
                      mr: 2,
                      ml: 4,
                      fontWeight: 500,
                      letterSpacing: '.1rem',
                      color: 'white',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'navy',
                      },
                    }}
                  >
                    Economía
                  </Typography>
                </NavLink>

                <NavLink to="/Tecnología">
                  <Typography
                    variant="h6"
                    noWrap
                    sx={{
                      mr: 2,
                      ml: 2,
                      fontWeight: 500,
                      letterSpacing: '.1rem',
                      color: 'white',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'navy',
                      },
                    }}
                  >
                    Tecnología
                  </Typography>
                </NavLink>

                <NavLink to="/Deportes">
                  <Typography
                    variant="h6"
                    noWrap
                    sx={{
                      mr: 2,
                      ml: 2,
                      fontWeight: 500,
                      letterSpacing: '.1rem',
                      color: 'white',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'navy',
                      },
                    }}
                  >
                    Deportes
                  </Typography>
                </NavLink>
              </Box>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: 'navy',
                    color: 'white',
                  },
                }}
                onClick={() => handleClickLogOut()}
              >
                <LogoutIcon />
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </>
  );
};
export default Nav;
