import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Header from './pug/header';
import ContentMixin from './pug/content_mixin'
import Footer from './pug/footer';
import Navbar from './pug/navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

// import '../../assets/sass/main.scss';

const App = () => pug`
  Router
    Header(
      content=${pug`h1 Best Calculator #[FontAwesomeIcon(icon=faCalculator)]`}
      navLinks=${pug`
        Link(to="/") Home
        Link(to="/about") About
        Link(to="/topics") Topics
      `})

    ContentMixin
      h2 *beep boop*
      Switch 
        Route(path="/about")
          h3 Welcome to about
        Route(path="/topics")
          h3 Welcome to topics
        Route(path="/")
          h3 Welcome to home

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