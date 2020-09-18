import React, { Component } from "react";
import Calculator from './Calculator';
import Productlist from '../product/Productlist';

class Monitor extends Component{
    constructor(props){
        super(props);
        this.state = {totalPrice:0,orders:[]};
        this.addOrder = this.addOrder.bind(this);
        this.delOrder = this.delOrder.bind(this);
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
    delOrder(product){  
        let findOrder = this.state.product.find(order => order.product.productId == product.productId)
        console.log(findOrder)
        // let resultOrder = this.state.orders.filter(order => order.product.productId != product.productId)
        // const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice))
        // this.setState({totalPrice: totalPrice, orders:resultOrder});
    } 

    render(){ 
        return(
            <div className="container mt-5">
                <div className="row"> 
                    <div className="col-md-8">
                        <Productlist products={this.props.products} onAddOrder={this.addOrder}  />
                    </div>
                    <div className="col-md-4">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onDelOrder={this.delOrder}/>
                    </div> 
                </div>
            </div>
        )
    }
}

export default Monitor;