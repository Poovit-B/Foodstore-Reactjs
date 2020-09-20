import {PRODUCTS_FETCH,PRODUCT_CREATE,PRODUCT_FETCH,PRODUCT_UPDATE} from "../actions/Type";
export default function(state = [],action){
    switch(action.type){
        case PRODUCTS_FETCH :
            return action.payload;
        case PRODUCT_FETCH :
            return action.payload;
        case PRODUCT_CREATE :
            return {saved : true,msg:"Successfully"}
        case PRODUCT_UPDATE :
        return {...state,saved : true,msg:"Successfully"}
        default:
            return state;
    }
}