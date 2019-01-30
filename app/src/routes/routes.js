import React from 'react';
import Searcher from '../components/searcher';
import ProductList from '../components/productList';
import ProductDetail from '../components/productDetail';
import Initial from '../components/initial';
import  Error404 from '../components/Error404';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const AppRouter = () => (
  <Router>
    <div>
      <Searcher />
      <Switch>
        <Route path="/" exact component={Initial} />
        <Route path="/items" component={ProductList} />
        <Route path="/item/:id" component={ProductDetail} />
        <Route component={Error404} />
      </Switch>
    </div>
  </Router>
);