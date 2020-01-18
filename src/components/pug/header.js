import React from 'react';

const Header = ({children}) => pug` 
  .container
    = children
`;

export default Header;