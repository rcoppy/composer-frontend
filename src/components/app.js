import React from 'react';
import Header from './pug/header';
import ContentMixin from './pug/content_mixin'
import Footer from './pug/footer';
import Navbar from './pug/navbar';
import LoginModal from './pug/login_modal';

const App = () => pug
  LoginModal
  
  Header
    h1 Best Calculator
    Navbar
      span #[a(href='') Home]
      span #[a(href='') About]
      span #[a(href='' data-toggle='modal' data-target='#loginModal') Login]

  ContentMixin
    h2 Hello! Welcome to calculator

  Footer
    p This is a footer
;

export default App;