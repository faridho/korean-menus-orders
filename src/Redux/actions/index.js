import { ADD_PRODUCT } from "../constants/action-types"

//let currentId = 0
export function addProduct(payload) {
    //const { cover, avatar, title, description }  = payload
    //currentId =+ 1

    return { 
        type: ADD_PRODUCT,
        payload
    }
}