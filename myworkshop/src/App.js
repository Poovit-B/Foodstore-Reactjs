import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Order from "./components/pages/order/Order";
import Product from "./components/pages/product/Product";
import Notfound from "./components/pages/Notfound";
;
class App extends Component {

  renderRouter(){
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/orders" component={Order} />
        <Route path="/products" component={Product} />

        <Route  component={Notfound} />
      </Switch>
    )
  }

  render() {
    return ( 
    <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;
