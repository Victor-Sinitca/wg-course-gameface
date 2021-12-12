import {InferActionsTypes} from "@/redux/redux";
// @ts-ignore
import dataJson from "../data.json"
import {IProduct} from "@/interfase/product";
import {IUser} from "@/interfase/user";

let initialState = {
    userData:{
        id: "1",
        name: "Victor",
        wishlist: [],
        shoppingList: [],
    } as IUser,
    productData:dataJson as Array<IProduct>
};

type initialStateType = typeof initialState
const productReducer = (state = initialState as initialStateType, action: ActionType): initialStateType => {
    switch (action.type) {
        case "DP/SET_DIALOGS":
            return {
                ...state,
            };
        default:
            return state;
    }
}
type ActionType = InferActionsTypes<typeof actionDialog>
export const actionDialog = {
    setDialogs: (dialogs: Array<any>) => ({type: 'DP/SET_DIALOGS', dialogs} as const),
}
export default productReducer;
