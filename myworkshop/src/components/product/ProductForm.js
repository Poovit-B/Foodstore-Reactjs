import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import FormFields from "../common/FormFields";
import {productFormFields} from "./formFields";

class ProductForm extends Component {

    renderFields(formFields) {
        return formFields.map(({ label, name, type, required }) => {
            return (
                <Field label={label} name={name} type={type} required={required} component={FormFields} />
            )
        })
    }

    render() {
        return (
            <div className="container col-4 mt-5">
                <form>
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
}
ProductForm = reduxForm({ validate, from: "productForm" })(ProductForm);
export default ProductForm;