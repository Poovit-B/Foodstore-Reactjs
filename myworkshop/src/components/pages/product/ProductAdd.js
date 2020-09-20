
import React, { Component } from 'react';
import Header from '../../Header';
import ProductForm from "../../product/ProductForm";

class ProductAdd extends Component{
    render(){
        return(   
            <div>
                <Header />
                <ProductForm />
            </div>
        )
    }
} 

export default ProductAdd;