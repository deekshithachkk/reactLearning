const { legacy_createStore: createStore,combineReducers,applyMiddleware } = require("redux");
const { createLogger } = require("redux-logger");

const BUY_CAKE="BUY_CAKE";
const BUY_ICECREAM="BUY_ICECREAM";

const buyCake=()=>{
    return {
        type:BUY_CAKE,
        info:"Redux first action"
    }
}

const buyIceCream=()=>{
    return {
        type:BUY_ICECREAM,
    }
}

const initialCakeState={
    numofCakes:10,
}
const initialIceCreamState={
    numofIceCreams:20
}
// reducer function
const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type)
    {
        case BUY_CAKE:return {
            ...state,
            numofCakes:state.numofCakes-1
        }
        
        default: return state;
    }
}

const iceCreamReducer=(state=initialIceCreamState,action)=>{
    switch(action.type)
    {
    
        case BUY_ICECREAM:return{
            ...state,
            numofIceCreams:state.numofIceCreams-1
        }
        default: return state;
    }
}

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
// const applyMiddlewares=applyMiddleware()
const logger=createLogger();
const store=createStore(rootReducer,applyMiddleware(logger));



// console.log(store.getState());
const unsubscribe=store.subscribe(()=>console.log("updated state",store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()