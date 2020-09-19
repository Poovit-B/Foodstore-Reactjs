
import React, { Component } from 'react';
import Header from '../../Header';
import axios from 'axios';
import Productlist from '../../product/Productlist';
class Product extends Component {
    constructor(props) { 
        super(props)
        this.state = { products: "" }
        this.onDelProduct = this.onDelProduct.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:3001/products").then(res => {
            this.setState({ products: res.data });
        })
    } 

    onDelProduct(products){
        const id = products.productId;
        axios.delete("http://localhost:3001/products/" + id).then(res=>{
            axios.get("http://localhost:3001/products").then(res => {
                this.setState({ products: res.data });
            }) 
        })
    }

    // showProduct() {
    //     return this.state.products && this.state.products.map(product => {
    //         return (
    //             <div></div>
    //         )
    //     })
    // }

    render() {

        return (
            <div className="">
                <Header />
                <div className="container mt-5">
                    <div className="row mb-2">
                        <div className="col-9">
                            <h4>สินค้า</h4>
                        </div>
                        <div className="col-3">
                            <a className="btn btn-success btn-block " >เพิ่มสินค้า</a>
                        </div>
                        <Productlist products={this.state.products} onDelProduct={this.onDelProduct} /> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Product