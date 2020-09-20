
import React, { Component } from 'react';
import Header from '../../Header';
import axios from 'axios';

import { connect } from "react-redux";
import { orderFecth,orerDelete  } from "../../../actions";

class Order extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // axios.get("http://localhost:3001/orders").then(res => {
        //     this.setState({ orders: res.data });
        // })
        this.props.orderFecth();
    }

    onDelOrder(orders){
        // console.log(orders.id)
        // axios.delete("http://localhost:3001/orders/" + orders.id).then(res=>{
        //     axios.get("http://localhost:3001/orders").then(res => {
        //         this.setState({ orders: res.data });
        //     }) 
        // })
        this.props.orerDelete( orders.id);
    }

    showOrder() {
        return this.props.orders && this.props.orders.map(order => {
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
function mapStateToProps(state){
    return {orders : state.orders};
}

export default connect(mapStateToProps,{orderFecth,orerDelete})(Order)