import React, { Component } from 'react';
import '../styles/productList.sass';

export default class ErrorRequest extends Component {

  render() {
    return (
      <div className="PLGeneral-container">
        <div className="List-container">
          <div className="NotResult-container">
            <b>Ocurrió un error inesperado. Vuelva a intentarlo.</b>
          </div>
        </div>
      </div>
    );
  }
}