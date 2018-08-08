import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

class App extends Component {

  componentDidCatch(error, componentStack) {
    window.analytics.track('Component Error', {
      componentStack: componentStack,
      error: error
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Segment Demo</h1>
        </header>
        <p className="App-intro">
          Tell us your name and favorite destination
        </p>
        <Form />
      </div>
    );
  }
}

export default App;
