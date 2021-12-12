import { combineReducers, createStore} from "redux";
import productReducer from "@/redux/productReducer";

let rootReducers = combineReducers({
    productPage: productReducer,
});
type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
const store = createStore(rootReducers);

export default store
