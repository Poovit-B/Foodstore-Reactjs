
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
            this.setState({ orders: res.data });
        })
    }

    onDelOrder(orders){
        console.log(orders.id)
        axios.delete("http://localhost:3001/orders/" + orders.id).then(res=>{
            axios.get("http://localhost:3001/orders").then(res => {
                this.setState({ orders: res.data });
            }) 
        })
    }

    showOrder() {
        return this.state.orders && this.state.orders.map(order => {
            const date = order.orderDate;
            return (
                <div key={order.id} className="col-md-3">
                    <div className="card-deck">
                        <div className="card pb-0">
                            <div className="card-body">
                                <h5>รายการที่ {order.id}</h5>
                                <ul>
                                    {order.orders && order.orders.map(record => {
                                        return (<li key={record.product.productId}>{record.product.productName}</li>)
                                    })}
                                </ul>
                                <h6>ราคารวม {order.totalPrice} ฿</h6>
                                <a  onClick={()=>this.onDelOrder(order)} className="card-link">ลบ</a>
                                <p className="text-muted">{date.toLocaleDateString}</p>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {

        return (
            <div className="">
                <Header />
                <div className="container mt-5">
                    <div className="row">
                        {this.showOrder()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Order