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

import {LoginModal} from './login_modal';

// import '../../assets/sass/main.scss';

const App = (props) => {
  <Router>
    <Header
      content={<h1>Call for Scores</h1>}
      navLinks={<>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to={`${this.props.match.url}/login`}>Login</Link>
      </>} />

    <ContentMixin>
      <Switch> 
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route 
          path={`${this.props.match.url}/edit`}
          render={(props) => {
            return (
              <LoginModal
                {...props}
              />
            );
          }}
        />
      </Switch>
    </ContentMixin>

    <Footer>
      <p>by <a href="http://alexrupp.com/">Alex</a>, Jan 2020</p>
      <p className="mb-0">Using!</p>
      <ul>
        <li>react-bootstrap</li>
        <li>fontawesome</li>
        <li>google fonts</li>
        <li>subtlepatterns</li>
      </ul>
    </Footer>
  </Router>
};

export default App;