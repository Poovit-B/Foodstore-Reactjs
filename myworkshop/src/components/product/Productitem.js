import React, { Component } from "react";


class Productitem extends Component {

    constructor(props) {
        super(props);
    }

    addItem(productName) {
        console.log(productName)
    }

    render() {
        const { productName, unitPrice, thumbnail } = this.props.product;
        return (
            <div className="col-3 p-1">
                <div className="card pb-0">
                    <img className="card-img-top" src={thumbnail} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{productName}</h5>
                        <p className="card-text">{unitPrice} ฿</p>
                        {this.props.onAddOrder && 
                        <a className="btn btn-primary btn-block " onClick={() => this.props.onAddOrder(this.props.product)}>เพิ่มสินค้า</a>
                        }
                        {(this.props.onDelProduct || this.props.onEditProduct) &&
                            <a className="btn btn-success btn-block " >แก้ไข</a>
                        } 
                        {(this.props.onDelProduct || this.props.onEditProduct) &&
                            <a className="btn btn-danger btn-block " onClick={() => this.props.onDelProduct(this.props.product)} >ลบ</a>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Productitem;