
import React, { Component } from 'react';
import Header from '../../Header';
import axios from 'axios';

class Order extends Component {
    constructor(props) {
        super(props)
        this.state = { orders: "" }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/orders").then(res => {
            this.setState({orders : res.data});
        })
    }

    showOrder(){
        return this.state.orders && this.state.orders.map(order=>{
            const date = order.orderDate;
            return(
                <div key={order.id} className="col-md-4">
                    <ul>
                        {order.orders && order.orders.map(record =>{
                           return( <li key={record.product.productId}>{record.product.productName}</li>)
                        })}
                    </ul>
                </div>
            )
        })
    }

    render() {
      
        return (
            <div className="container mt-5">
                <Header />
                <div className="row">
                {this.showOrder()}
                </div>
            </div>
        )
    }
}

export default Order