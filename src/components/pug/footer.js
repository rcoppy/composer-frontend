import React from 'react';

const Footer = ({children}) => pug`
  footer
    .container
      = children
`;

export default Footer;