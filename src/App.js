import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import Container from "./contents/dietTable";
import Example from "./contents/calendar";
import Media from "./contents/mediaUpload";

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <header className="App-header">
          <div className="logo">
            <span className="title">Body Check</span>
          </div>
          <div className="icon">
            <i className="icon-signal"></i>
            <i className="icon-my"></i>
          </div>
        </header>
        <section>
          <div className="calendar">
            <Example />
          </div>
          <div className="exercise-table"></div>
          <div className="diet-table">
            <Container />
          </div>
          <div className="media-upload">
            <p>미디어 업로드</p>
            <Media />
          </div>
        </section>
      </body>
    </div>
  );
}

export default App;