const Navbar = ({children}) => pug`
  .navbar
    .container
      = children
      // intended use is span #[a(href="destination") Link]
`;

export default Navbar;