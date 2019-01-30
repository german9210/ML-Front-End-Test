import React, { Component } from 'react';
import '../styles/productItem.sass';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
import imgShipping from '../assets/ic_shipping@2x.png';

export default class ProductItem extends Component {

  constructor(props) {
    super(props)
    const {
      id,
      title,
      price,
      picture,
      state,
      free_shipping } = props;

    this.state = {
      id,
      title,
      price,
      picture,
      state,
      free_shipping,
    };
  }


  getCurrency = (price) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    })
    return formatter.format(price);
  }


  render() {
    return (
      <div className="Item-container">
        <Grid fluid>
          <Row>
            <Col xs={8} sm={4} md={4} lg={2} >
              <div className="Image-container">
                <Link to={"/item/" + this.state.id}>
                  <img src={this.state.picture} alt="imagen" />
                </Link>
              </div>
            </Col>

            <Col xs={2} sm={4} md={4} lg={4} >
              <div className="Data-container">
                <Row>
                  <div className="Price-container">
                    {this.getCurrency(this.state.price)}
                  </div>
                  <div className="Shipping-container">
                    {(this.state.free_shipping) ? <img src={imgShipping} alt="envio_gratis" /> : null}
                  </div>
                </Row>
                <Row>
                  <Link to={"/item/" + this.state.id}>
                    
                    <div className="Title-container">
                      {this.state.title}
                    </div >
                  </Link>
                </Row>
              </div>
            </Col>

            <Col xs={3} sm={3} md={2} lg={4} >
              <div className="State">
              {this.state.state}
            </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}