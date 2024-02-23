import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/cake/CakeAction';
import buyIceCream from '../redux/iceCream/IceCreamAction';

function ItemContainerComp(props) {
    return (
        <div>
           <p>Item - {props.item}</p> 
           <button onClick={props.itemDispatch}>Add Item</button>
        </div>
    );
}
const mapStateToProps=(state,ownProp)=>{
    const itemState=ownProp.cake?state.cake.numofCakes:state.iceCream.numofIcecreams
    return {
        item:itemState
    }
}

const mapDispatchToProps=(dispatch,ownProp)=>{
    const dispatchFunction=ownProp.cake?()=>dispatch(buyCake()):()=>dispatch(buyIceCream())
    return{
        itemDispatch:dispatchFunction
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainerComp);