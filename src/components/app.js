import React from 'react';
import Header from './pug/header';
import ContentMixin from './pug/content_mixin'
import Footer from './pug/footer';
import Navbar from './pug/navbar';
import CalculatorPads from './pug/calculator_pads';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

// import '../../assets/sass/main.scss';

const App = () => pug`
  Header(
    content=${pug`h1 Best Calculator #[FontAwesomeIcon(icon=faCalculator)]`})

  ContentMixin
    h2 *beep boop*
    CalculatorPads

  Footer
    p by #[a(href="http://alexrupp.com/") Alex], Jan 2020
    p.mb-0 Using!
    ul
      li react-bootstrap
      li fontawesome
      li google fonts
      li subtlepatterns
`;

export default App;