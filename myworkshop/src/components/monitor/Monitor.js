import React, { Component } from "react";
import Calculator from './Calculator';
import Productlist from '../product/Productlist';

class Monitor extends Component{
    constructor(props){
        super(props);
        this.state = {totalPrice:0,orders:[]};
        this.addOrder = this.addOrder.bind(this);
    }

    addOrder(product){  

        let findOrder = this.state.orders.find(order => order.product.productId == product.productId)
        if(findOrder){
            findOrder.quantity++;
        }else{
            this.state.orders.push({product : product, quantity : 1})
        }
        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
        this.setState({totalPrice: totalPrice, orders:this.state.orders});
    } 

    render(){ 
        return(
            <div className="container mt-5">
                <div className="row"> 
                    <div className="col-md-8">
                        <Productlist products={this.props.products} onAddOrder={this.addOrder} />
                    </div>
                    <div className="col-md-4">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} />
                    </div> 
                </div>
            </div>
        )
    }
}

export default Monitor;