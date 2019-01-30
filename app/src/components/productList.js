import React, { Component } from 'react';
import ProductItem from './productItem';
import '../styles/productList.sass';
import queryString from 'query-string'
import { getProductsByQuery } from '../actions/actions';
import ErrorRequest from '../components/ErrorRequest';
import ReactLoading from 'react-loading';

export default class ProductList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      query: '',
      loaded: false,
      error: false,
      data: ''
    }
  }

  componentDidMount() {
    let query = queryString.parse(this.props.location.search).search;
    this.setState({ query: query === undefined ? '' : query }, () => {
      this.getProducts(this.state.query);
    });
  }

  componentWillReceiveProps(props) {
    let UpdatedQuery = queryString.parse(props.location.search).search
    if (this.state.query !== UpdatedQuery) {
      this.setState({ query: UpdatedQuery, loaded: false }, () => {
        this.getProducts(this.state.query);
      });
    }
  }
  getCategories = (cats) => {
    let value = '';
    if(cats != undefined || cats != null) {
    cats.forEach(function (element, i) {
      if (cats.length === i + 1)
        value += element;
      else
        value += element + ' > ';
    });
  }
    return value;
  }

  getProducts = async (q) => {
    let result = await getProductsByQuery(q);
    if (result != null) {
      if (result === "Failed")
        await this.setState({ error: true });       
      await this.setState({ data: result });
      await this.setState({ loaded: true });
    }
  }

  render() {
    const { data } = this.state;

    return (
      (!this.state.loaded) ?
        <div className="Loading-container">
          <ReactLoading type={'spinningBubbles'} color={'#3483FA'} height={'10%'} width={'10%'} />
        </div>
        : <div className="PLGeneral-container">
          <div className="Categories-container">
            {this.getCategories(data.categories)}
          </div>

          <div className="List-container">
            {(!this.state.error) ?
              (data != null && data.items.length > 0) ?
                data.items.map(function (listValue, i) {
                  return (<ProductItem
                    key={i}
                    id={listValue.id}
                    title={listValue.title}
                    price={listValue.price.amount}
                    picture={listValue.picture}
                    state={listValue.state}
                    free_shipping={listValue.free_shipping}
                  />);
                }) :
                <div className="NotResult-container">
                  <b>
                    No se encontraron resultados
                  </b>
                </div>
              : <ErrorRequest />
            }
          </div>
        </div>
    );
  }
}
