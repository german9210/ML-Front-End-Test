import React, { Component } from 'react';
import logo from '../img/ML-logo.png';
import '../styles/base.sass';
export default class Initial extends Component {
  
  render() {
    return (
      <div className="div-init">
        <img src={logo} alt="Bienvenido a MercadoLibre" />
      </div>
    );
  }
}