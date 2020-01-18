import React from 'react';
import Header from './pug/header';
import ContentMixin from './pug/content_mixin'
import Footer from './pug/footer';
import Navbar from './pug/navbar';
import NumberPad from './pug/number_pad';

// import '../../assets/sass/main.scss';

const App = () => pug`
  Header(
    content=${pug`h1 Best Calculator`})

  ContentMixin
    h2 Hello! Welcome to calculator
    NumberPad

  Footer
    p This is a footer
`;

export default App;