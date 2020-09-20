import axios from "axios";
import { PRODUCTS_FETCH } from "./Type";

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