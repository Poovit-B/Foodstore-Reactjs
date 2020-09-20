import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import FormFields from "../common/FormFields";
import {productFormFields} from "./formFields";


class ProductForm extends Component {

    renderFields(formFields) {
        return formFields.map(({ label, name, type, required }) => {
            return (
                <Field key={name} label={label} name={name} type={type} required={required} component={FormFields} />
            )
        })
    }

    render() {
        const {onProductSubmit} = this.props;
        return (
            <div className="container col-4 mt-5">
                <form onSubmit={this.props.handleSumbit(onProductSubmit)}>
                    {this.renderFields(productFormFields)}
                    <button className="btn btn-block btn-info mt-2" type="submit">
                        Save
                    </button>
                </form>
            </div>
        )
    }

}

function validate(values){
    console.log(values);
    const errors = {};
    productFormFields.forEach(({name,required})=>{
        if(!values[name] && required){
            errors[name] = "Please fill input";
        }
    })
    return errors;
}
ProductForm = reduxForm({ validate, form: "productForm" })(ProductForm);
export default ProductForm;