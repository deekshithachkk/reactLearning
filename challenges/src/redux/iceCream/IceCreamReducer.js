import { BUY_ICE_CREAM } from "./IceCreamType";
const initialState={
    numofIcecreams:20
}
export const IceCreamReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case BUY_ICE_CREAM:return{
            ...state,
            numofIcecreams:state.numofIcecreams-1

        }
        default: return state
    }
}
