import { combineReducers, createStore} from "redux";
import shopReducer from "./shopReducer";

let rootReducers = combineReducers({
    shopReducer: shopReducer,
});
type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
const store = createStore(rootReducers);

export default store
