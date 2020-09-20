import axios from "axios";
import { PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_CREATE, PRODUCT_UPDATE } from "./Type";

export const productonlyFetch = (id) => {
    return dispatch => {
        axios.get("http://localhost:3001/products"+id).then(res => {
            dispatch({ type: PRODUCT_FETCH, payload: res.data })
        })
    }

}

export const productFetch = () => {
    return dispatch => {
        axios.get("http://localhost:3001/products").then(res => {
            dispatch({ type: PRODUCTS_FETCH, payload: res.data })
        })
    }

}

export const productDelete = id => {
    return dispatch => {
        axios.delete("http://localhost:3001/products/" + id).then(res => {
            axios.get("http://localhost:3001/products").then(res => {
                dispatch({ type: PRODUCTS_FETCH, payload: res.data })
            })
        })
    }
}

export const productCreate = values => {
    return dispatch => {
        axios.post("http://localhost:3001/products",values).then(res => {
            dispatch({ type: PRODUCT_CREATE, payload: res.data })
        })
    }
}

export const productUpdate = (id,values) => {
    return dispatch => {
        axios.put("http://localhost:3001/products/"+id,values).then(res => {
            dispatch({ type: PRODUCT_UPDATE, payload: res.data })
        })
    }
}