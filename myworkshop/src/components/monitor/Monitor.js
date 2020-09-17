import React, { Component } from "react";
import Calculator from './Calculator';
import Productlist from '../product/Productlist';

class Monitor extends Component{
    render(){
        return(
            <div className="container mt-5">
                <div className="row"> 
                    <div className="col-md-8">
                        <Productlist products={this.props.products} />
                    </div>
                    <div className="col-md-4">
                        <Calculator />
                    </div>
                </div>
            </div>
        )
    }
}

export default Monitor;