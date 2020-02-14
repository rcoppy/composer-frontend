import React from 'react';
import Navbar from './navbar';

const Header = ({content, navLinks}) => pug` 
  header
    .header-wrapper.container      
      .container
        = content
      .logo #[img(src="../../../assets/images/ccp_logo_transparent.png")]
    if navLinks
      Navbar
        = navLinks
`;

export default Header;