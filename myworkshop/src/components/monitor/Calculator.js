import React, {Component} from "react";

class Calculator extends Component{
    // showOrders(orders){
    //     if(!orders || orders.lenght == 0){
    //         return <li class="list-group-item"> ไม่มีสินค้า </li>
    //     }else{
    //         return orders.map(order => {
    //             <li class="list-group-item">
    //                 {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity} ฿
    //                 <button className="badge badge-danger badge-pill">ลบ</button>
    //             </li>
    //         })
    //     }
    // }
    
    render(){
        const {totalPrice,orders} = this.props;
        return(
            <div >
                <h4>รายการ</h4>
                <hr/>
                <ul class="list-group">
                    
                </ul>
                <h4 className="ml-2 mt-3 text-right">ราคารวม 340 ฿</h4>
                <hr/>
                <button className="btn btn-block btn-danger">ยืนยัน</button>
                <button className="btn btn-block btn-primary">ยกเลิก</button>
            </div>
        )
    }
}

export default Calculator