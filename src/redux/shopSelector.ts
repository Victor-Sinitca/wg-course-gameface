import {AppStateType} from "@/redux/redux";


export const getProducts = (state: AppStateType) => {
    return state.shopReducer.productData
}
export const getUserState = (state: AppStateType) => {
    return state.shopReducer.userData
}
export const getSelectedProductType = (state: AppStateType) => {
    return state.shopReducer.selectedProductType
}
