import React from 'react';
import Header from './pug/header';
import ContentMixin from './pug/content_mixin'
import Footer from './pug/footer';
import Navbar from './pug/navbar';

// import '../../assets/sass/main.scss';

const App = () => pug`
  Header(
    content=${pug`h1 Best Calculator`}
    navLinks=${pug`
      span #[a(href='') Home]
      span #[a(href='') About]
      span #[a(href='') Login]
    `})

  ContentMixin
    h2 Hello! Welcome to calculator

  Footer
    p This is a footer
`;

export default App;