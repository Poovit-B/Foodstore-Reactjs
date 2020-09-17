import React, { Component } from "react";

import Productitem from '../product/Productitem';

class Productlist extends Component{

    constructor(props){
        super(props)
    }

    showProducts(){ 
        console.log(this.props.products)
        if(this.props.products){
            return this.props.products.map(product => (
                <Productitem key={product.productId} {...product} />
            ))
        }
    }
    
    render(){
        return(
            <div className="row m-0">
                {this.showProducts()}
            </div>
        )
    }
}

export default Productlist;