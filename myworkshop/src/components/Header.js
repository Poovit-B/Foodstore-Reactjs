import React from "react";
import {NavLink } from "react-router-dom";
class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
            <NavLink  className="navbar-brand" to="/">Food Store</NavLink >
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav"> 
                <li className="nav-item ">
                  <NavLink  className="nav-link " exact={true}  to="/"  activeClassName='active' >Home</NavLink >
                </li> 
                <li className="nav-item" >
                  <NavLink  className="nav-link " to="/orders"  activeClassName='active'>Order</NavLink >
                </li>
                <li className="nav-item" > 
                  <NavLink  className="nav-link " to="/products"  activeClassName='active'>Product</NavLink >
                </li>
                <li className="nav-item" > 
                  <NavLink  className="nav-link " to="/about"  activeClassName='active'>About us</NavLink >
                </li>
              </ul>
            </div>
            </div>
          </nav>
        )
    } 
}

export default Header;