import React, { Component } from 'react';
import '../styles/productDetail.sass';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { getProductById } from '../actions/actions';
import ReactLoading from 'react-loading';


export default class ProductDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      error: false,
      data: '',
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    this.setState({ id: id === undefined ? '' : id }, () => {
      this.getProduct(this.state.id);
    });
  }

  getProduct = async (id) => {
    let result = await getProductById(id);
    if (result != null) {
      if (result === "Failed to fetch")
        await this.setState({ error: true });

      await this.setState({ data: result });
      await this.setState({ loaded: true });
    }
  }

  isNew = () => {
    let isNew = (this.state.data.condition === "new") ? "Nuevo" : "Usado";
    return isNew;
  }

  loadDescription = () => {
    let result = [];
    let p = this.state.data.item.description.split('\n\n');
    p.forEach(function (element, i) {
      result.push(<p key={i}>{element}</p>);
    });
    return result;
  }

  render() {
    const { data } = this.state;
    return (
      (!this.state.loaded) ?
        <div className="Loading-container">
          <ReactLoading type={'spinningBubbles'} color={'#3483FA'} height={'10%'} width={'10%'} />
        </div>
        :
        <div className="PLGeneral-container">
        <div className="Categories-container">
          </div>
          <div className="List-container">

            {(!this.state.error) ?
              (data != null) ?
                <Grid>
                  <Row>
                    <Col xs={12} sm={12} md={9} lg={8} >
                      <div className="DetailImage-container">
                        <img src={this.state.data.item.picture} alt="Imagen" />
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={3} lg={4} >
                      <div className="NewSold-container">
                        {this.isNew()} - {this.state.data.item.sold_quantity} Vendidos
                        </div>
                      <div className="DTitle-container">
                        {this.state.data.item.title}
                      </div>
                      <div className="DPrice-container">
                        ${this.state.data.item.price.amount}
                      </div>
                      <div className="DButton-container">
                        <button className="DButton" onClick={() => alert("No disponible")}>
                          <div>Comprar</div>
                        </button>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={10} sm={10} md={7} lg={8} >
                      <div className="DText">
                        <div className="TitleDesc-container">
                          Descripcion del producto
                        </div>
                        <div className="Description-container">
                          {this.loadDescription()}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Grid>
                : <div>Cargando</div>
              : <div>Error</div>}
          </div>
        </div>
    );
  }
}

