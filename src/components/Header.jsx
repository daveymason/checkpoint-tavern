import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ChatIcon from '@mui/icons-material/Chat';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import logo from '../assets/logo.png';

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'secondary.main' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
           <a href="/"><img src={logo} alt="Logo" style={{ width: '40px', height: '40px' }} /></a>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'secondary.main' }}>
          Checkpoint Tavern
        </Typography>
        <Button color="inherit" startIcon={<InfoIcon />}>About</Button>
        <Button color="inherit" startIcon={<ChatIcon />}>Features</Button>
        <Button color="inherit" startIcon={<ContactMailIcon />}>Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
