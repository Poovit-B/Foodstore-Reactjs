import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Order from "./components/pages/order/Order";
import Product from "./components/pages/product/Product";
import Notfound from "./components/pages/Notfound";
import ProductEdit from "./components/pages/product/ProductEdit";
import ProductAdd from "./components/pages/product/ProductAdd";
import history from './history';

class App extends Component {

  renderRouter() {
    return (
      <Switch>
 
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/orders" component={Order} />
          <Route exact path="/products" component={Product} />
          <Route exact path="/products/add" component={ProductAdd} />
          <Route exact path="/products/edit:id" component={ProductEdit} />

          <Route path="*" component={Notfound} />
          <Redirect to="/404" />
        
      </Switch>
    )
  }

  render() {
    return (
      <Router history={history}>{this.renderRouter()}</Router>
    );
  }
}

export default App;
