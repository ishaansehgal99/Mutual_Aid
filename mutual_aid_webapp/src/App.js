import React from 'react';

import Container from 'react-bootstrap/Container';
import NavigationBar from './NavigationBar';
import './App.css';
import Banner from './Banner';
import Intro from './Intro';
import About from './About';
import Download from './Download';

const App = () => (
  <div>
    <div className = "banner sticky-nav">
      <NavigationBar></NavigationBar>
    </div>
    <div id = "banner" className = "banner">
      <Container className = "p-5">
          <Banner></Banner>  
      </Container>
    </div>
    <div className = "intro">
      <Container className = "p-5">
        <Intro></Intro>  
      </Container>  
    </div>
    <div id = "contact" className = "contact form">
      <Container className = "pt-5">
        <iframe className = "form" src="https://docs.google.com/forms/d/e/1FAIpQLSdQlIDE3zgCoKJQL0_lDUySXh1_20rJ6mWBC_t04rxuT2rhHQ/viewform?embedded=true" width="640" height="645" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
      </Container>
    </div>
    
    <div id = "about" className = "about">
      <Container>
          <About></About>  
      </Container>
    </div>
    <div id = "download" className = "download">
      <Container>
          <Download name = "download"></Download>  
      </Container>
    </div>
  </div>
);

export default App;
