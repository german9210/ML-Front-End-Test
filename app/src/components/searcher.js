import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../styles/searcher.sass';
import logo from '../assets/Logo_ML@2x.png';
import search from '../assets/ic_Search.png';
import { Link } from "react-router-dom";

export default class Searcher extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {

      window.location.href = "/items?search="+ this.state.keyword;
    }
  }

  handleChange = (event) => {
    this.setState({ keyword: event.target.value });
  }

  render() {
    return (
      <div className="SGeneral-container">
        <div className="Searcher-container">
          <Grid fluid>
            <Row>
              <Col xs={4} sm={2} md={2} lg={2}>
                <div className="Logo-container">
                  <Link to={"/"}>
                    <img src={logo} alt="MercadoLibre" />
                  </Link>
                </div>
              </Col>
              <Col xs={6} sm={8} md={9} lg={9}>
                <input
                  type="text"
                  className="Search-text"
                  name="keyword"
                  placeholder="Nunca dejes de buscar"
                  value={this.state.keyword}
                  onChange={this.handleChange}
                  onKeyPress={this._handleKeyPress}
                />

                <Link to={"/items?search=" + this.state.keyword}>
                  <button className="Search-Button" type="submit" value="Submit" >
                    <img src={search} alt="buscar" />
                  </button>
                </Link>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
