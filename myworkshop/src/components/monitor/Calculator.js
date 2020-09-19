import React, {Component} from "react";

class Calculator extends Component{

    showOrders(orders){ 
        if(!orders || orders.length == 0){
            return (<li class="list-group-item"> ไม่มีสินค้า </li>)
        }else{ 
            // return (<li class="list-group-item"> มีสินค้า </li>)
            return orders.map(order => {
                console.log(order)
               return(
                <li class="list-group-item">
                    {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity} ฿
                    <button className="badge badge-danger badge-pill" onClick={()=>this.props.onDelOrder(order)}>ลบ</button>
                </li>
               )
            }) 
        }
    }
    
    render(){
        const {totalPrice,orders} = this.props;
        return(
            <div >
                <h4>รายการ</h4>
                <hr/>
                <ul class="list-group">
                    {this.showOrders(orders)}
                </ul>
                <h4 className="ml-2 mt-3 text-right">ราคารวม {totalPrice} ฿</h4>
                <hr/>
                <button className="btn btn-block btn-danger" onClick={()=>this.props.onConfirmOrder()}>ยืนยัน</button>
                <button className="btn btn-block btn-primary" onClick={()=>this.props.onCancelOrder()}>ยกเลิก</button>
            </div>
        )
    }
}

export default Calculator