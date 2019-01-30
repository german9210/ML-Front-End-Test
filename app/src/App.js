import React, { Component } from 'react';
import './App.css';
import './styles/base.sass';
import { AppRouter } from './routes/routes';
class App extends Component {
  render() {
    return (
      <div className="div-master" >
        <AppRouter />
      </div>
    );
  }
}

export default App;
