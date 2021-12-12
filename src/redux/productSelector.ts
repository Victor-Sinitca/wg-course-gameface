import {AppStateType} from "./redux";

export const getProducts =(state:AppStateType)=>{
    return state.productPage.productData
}
export const getUserState =(state:AppStateType)=>{
    return state.productPage.userData
}
export const getSelectedProductType =(state:AppStateType)=>{
    return state.productPage.selectedProductType
}
