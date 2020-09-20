
import React, { Component } from 'react';
import Header from '../../Header';
import { connect } from "react-redux";
import { productDelete, productUpdate, productCreate } from "../../../actions";
import ProductForm from "../../product/ProductForm";

class ProductEdit extends Component {
    componentDidMount(){

    }
    render() {
        const { formValues, match , products, productUpdate , productCreate} = this.props;

        return (
            <div>
                <Header />
                {match.path.indexOf("add") > 0 && (
                    <div>
                        <h4>เพิ่มสินค้า</h4>
                        <ProductForm onProductSubmit={() => productCreate(formValues)} />
                    </div>
                )}
                {match.path.indexOf("add") > 0 && (
                    <div>
                        <h4>แก้ไขสินค้า</h4>
                        <ProductForm onProductSubmit={() => productCreate(products.id,formValues)} />
                    </div>
                )}
            </div>
        )
    }
}
function mapStateToProps({form,products}){
    return {formValues : form.productForm ?  form.productForm.values : null,}
}
export default connect(mapStateToProps,{ productDelete, productUpdate, productCreate})(ProductEdit);