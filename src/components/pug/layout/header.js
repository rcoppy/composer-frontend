import React from 'react';
import Navbar from './navbar';
import LogoImage from '../../../../assets/images/ccp_logo_transparent.png';

const Header = ({content, navLinks}) => pug` 
  header
    .header-wrapper.container      
      = content
      .logo #[img(src=LogoImage)]
    if navLinks
      Navbar
        = navLinks
`;

export default Header;