import { AppBar, Toolbar, Typography, Button, IconButton, Box, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ChatIcon from '@mui/icons-material/Chat';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FeaturesIcon from '@mui/icons-material/Stars';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header({ onNavClick }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { label: 'About', icon: <InfoIcon />, section: 'about' },
    { label: 'Features', icon: <FeaturesIcon />, section: 'features' },
    { label: 'Why Us', icon: <ChatIcon />, section: 'usp' },
    { label: 'Contact', icon: <ContactMailIcon />, section: 'contact' },
  ];

  const handleNavClick = (section) => {
    if (isMobile) setDrawerOpen(false);
    if (onNavClick) onNavClick(section);
  };

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        boxShadow: theme.shadows[1],
      })}
    >
      <Toolbar>
        <IconButton edge="start" component={Link} to="/" color="inherit" aria-label="home" sx={{ mr: 2 }}>
          <img src={logo} alt="Checkpoint Tavern" style={{ width: 40, height: 40, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }} />
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: '"Cinzel", serif', fontWeight: 600 }}>
          Checkpoint Tavern
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              sx={(theme) => ({
                '& .MuiDrawer-paper': {
                  width: 250,
                  bgcolor: theme.palette.background.default,
                  color: theme.palette.text.primary,
                },
              })}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
                <Typography variant="h6" sx={{ fontFamily: '"Cinzel", serif' }}>Menu</Typography>
                <IconButton color="inherit" onClick={() => setDrawerOpen(false)}><CloseIcon /></IconButton>
              </Box>
              <List>
                {navItems.map(item => (
                  <ListItem key={item.label} disablePadding>
                    <ListItemButton onClick={() => handleNavClick(item.section)} sx={{ py: 2, '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>
                      <Box sx={{ mr: 2 }}>{item.icon}</Box>
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
                <ListItem disablePadding>
                  <ListItemButton component={Link} to="/chat" sx={{ py: 2, backgroundColor: 'rgba(138,79,43,0.8)', mt: 2, '&:hover': { backgroundColor: 'rgba(138,79,43,1)' } }}>
                    <Box sx={{ mr: 2 }}><ChatIcon /></Box>
                    <ListItemText primary="Enter Tavern" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {navItems.map(item => (
              <Button
                key={item.label}
                onClick={() => handleNavClick(item.section)}
                sx={(theme) => ({
                  mx: 1,
                  color: theme.palette.text.primary,
                  '&:hover': { backgroundColor: theme.palette.action.hover },
                })}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/chat"
              sx={{ ml: 2 }}
            >
              Enter Tavern
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
