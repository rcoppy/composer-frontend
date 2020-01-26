import React from 'react';

const Navbar = ({children}) => pug`
  .navbar
    .container
      = children
      // intended use is a(href="destination") Link
`;

export default Navbar;