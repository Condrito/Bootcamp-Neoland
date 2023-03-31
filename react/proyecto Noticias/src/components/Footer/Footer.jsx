import './footer.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <p>Condrito</p>
      <a href="https://github.com/Condrito" target="_blank" rel="noreferrer">
        <GitHubIcon sx={{ color: 'white' }} />
      </a>
    </div>
  );
};

export default Footer;
