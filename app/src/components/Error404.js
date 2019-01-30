import React, { Component } from 'react';
import '../styles/base.sass';
import error from '../img/error404.png';

export default class Error404 extends Component {

  render() {
    return (
      <div className="div-error">
      <img src={error} alt="Error 404 Not found!" />
    </div>
    );
  }
}