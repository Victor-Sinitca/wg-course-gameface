import {InferActionsTypes} from "@/redux/redux";
// @ts-ignore
import dataJson from "./data.json"
import {IProduct, TFilter} from "@/interfase/product";
import {IUser} from "@/interfase/user";

let initialState = {
    userData: {
        id: "1",
        name: "Victor",
        wishlist: [],
        shoppingList: [],
    } as IUser,
    productData: dataJson as Array<IProduct>,
    selectedProductType: "All" as TFilter | "All"
};

type initialStateType = typeof initialState
const productReducer = (state = initialState as initialStateType, action: ActionType): initialStateType => {
    let stateCopy: initialStateType
    switch (action.type) {
        case "PR/ADD_PRODUCT_TO_WISHLIST":
            stateCopy = {...state}
            const length = stateCopy.userData.wishlist.length
            stateCopy.userData = {...state.userData}
            stateCopy.userData.wishlist = state.userData.wishlist.filter((value: string) => value !== action.productId)
            if (stateCopy.userData.wishlist.length === length) stateCopy.userData.wishlist.push(action.productId)
            return stateCopy
        case "PR/ADD_PRODUCT_TO_SHOPINGLIST":
            stateCopy = {...state}
            if (!stateCopy.userData.shoppingList.includes(action.productId)) {
                stateCopy.userData = {...state.userData}
                stateCopy.userData.shoppingList.push(action.productId)
            }
            return stateCopy
        case "PR/SET_SELECTED_PRODUCT_TYPE":
            return {
                ...state, selectedProductType: action.productType
            }
        default:
            return state;
    }
}
type ActionType = InferActionsTypes<typeof actionDialog>
export const actionDialog = {
    addProductToWishlist: (productId: string) => ({type: 'PR/ADD_PRODUCT_TO_WISHLIST', productId} as const),
    addProductToShoppingList: (productId: string) => ({type: 'PR/ADD_PRODUCT_TO_SHOPINGLIST', productId} as const),
    setSelectedProductType: (productType: TFilter | "All") => ({
        type: 'PR/SET_SELECTED_PRODUCT_TYPE',
        productType
    } as const),
}
export default productReducer;
