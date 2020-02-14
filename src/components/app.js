import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Header from './pug/layout/header';
import ContentMixin from './pug/layout/content_mixin'
import Footer from './pug/layout/footer';
import Navbar from './pug/layout/navbar';

import About from './pug/content/about';
import Gallery from './pug/content/gallery';
import Composers from './pug/content/composers';
import Home from './pug/content/home';

// import '../../assets/sass/main.scss';

const App = () => pug`
  Router
    Header(
      content=${pug`h1 Call for Scores`}
      navLinks=${pug`
        Link(to="/") Home
        Link(to="/composers") Composers
        Link(to="/about") About
        Link(to="/gallery") Gallery
      `})

    ContentMixin
      Switch 
        Route(exact path="/")
          Home
        Route(path="/about")
          About
        Route(path="/gallery")
          Gallery
        Route(path="/composers")
          Composers

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