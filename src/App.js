import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import Container from 'react-bootstrap/Container';
import NavigationBar from './NavigationBar';
import './App.css';
import Banner from './Banner';
import Home from './Home';
import Requests from './Requests';
import Messages from './Messages';
import Download from './Download';
import VideoButton from './VideoButton';

const App = () => (
  <div>
    <div className = "maroon-background fill-width sticky-nav">
      <NavigationBar></NavigationBar>
    </div>

    <div id = "banner" className = "maroon-background fill-width">
      <Container className = "py-5">
          <Banner></Banner>  
      </Container>
    </div>

    <div id = "about" className = "white-background fill-width">
      <Container className = "py-5">
          <Home></Home>  
      </Container>
    </div>

    <div className = "maroon-background fill-width">
      <Container className = "py-5">
          <Requests></Requests>  
      </Container>
    </div>

    <div className = "white-background fill-width">
      <Container className = "py-5">
          <Messages></Messages>  
      </Container>
    </div>
    
    <div id = "download" className = "maroon-background fill-width">
      <Container className = "py-5">
          <Download name = "download"></Download>  
      </Container>
    </div>
  </div>
);

export default App;
