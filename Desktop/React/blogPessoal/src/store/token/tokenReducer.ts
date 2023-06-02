import { Action } from "./Actions"

export interface tokenstate{
    tokens: string
}

const inititalState = {
      tokens: ""
}

export const tokenReducer = (state: tokenstate = inititalState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN" : {
            return {tokens: action.payload}
        }

        default:
            return state
    }
}