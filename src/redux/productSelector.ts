import {AppStateType} from "./redux";

export const getPro =(state:AppStateType)=>{
    return state.chat.messages
}
export const getStatus =(state:AppStateType)=>{
    return state.chat.status
}
