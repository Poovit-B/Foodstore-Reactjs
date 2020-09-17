import React, {Component} from "react";


class Calculator extends Component{
    render(){
        return(
            <div >
                <h4>รายการ</h4>
                <hr/>
                <ul class="list-group">
                <li class="list-group-item">Cras justo odio x 1 = 250 ฿ 
                    <button className="badge badge-danger badge-pill">ลบ</button>
                </li>
                <li class="list-group-item">Cras justo odio x 1 = 250 ฿ 
                    <button className="badge badge-danger badge-pill">ลบ</button>
                </li>
                <li class="list-group-item">Cras justo odio x 1 = 250 ฿ 
                    <button className="badge badge-danger badge-pill">ลบ</button>
                </li>
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