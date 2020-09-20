
import React, { Component } from 'react';
import Header from '../../Header';
import axios from 'axios';
import Productlist from '../../product/Productlist';
import { withRouter} from "react-router-dom";
import { connect } from "react-redux";
import { productFetch , productDelete} from "../../../actions";

class Product extends Component {
    constructor(props) { 
        super(props)
        this.onDelProduct = this.onDelProduct.bind(this);
        this.onEditProduct = this.onEditProduct.bind(this);
    }

    componentDidMount() {
        // axios.get("http://localhost:3001/products").then(res => {
        //     this.setState({ products: res.data });
        // })
        this.props.productFetch();
    } 

    onEditProduct(products){
        this.props.history.push('products/edit/'+ products.id)
    } 

    onDelProduct(products){
        const id = products.productId; 
        // axios.delete("http://localhost:3001/products/" + products.id).then(res=>{
        //     axios.get("http://localhost:3001/products").then(res => {
        //         this.setState({ products: res.data });
        //     }) 
        // }) 
        this.props.productDelete(products.id);
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
                            <a className="btn btn-success btn-block "  onClick={() =>this.props.history.push('products/add/')}>เพิ่มสินค้า</a>
                        </div>
                        <Productlist products={this.props.products} onDelProduct={this.onDelProduct} onEditProduct={this.onEditProduct} /> 
                    </div>
                </div>
            </div>
        )
    }
} 
function mapStateToProps(state) {
    return { products : state.products};
  }
export default withRouter(connect(mapStateToProps,{productFetch,productDelete})(Product))