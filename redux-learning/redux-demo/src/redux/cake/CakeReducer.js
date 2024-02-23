import { BUY_CAKE } from "./CakeActionType"

const initialState={
    numofCakes:10
}

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numofCakes:state.numofCakes-1
        }
        default: return state
    }

}