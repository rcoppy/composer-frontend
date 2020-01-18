import React from 'react';
import Navbar from './navbar';

const Header = ({content, navLinks}) => pug` 
  header
    .container
      = content
    Navbar
      = navLinks
`;

export default Header;