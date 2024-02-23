import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/cake/CakeAction';

function HookCakeComp() {
    const dispatch=useDispatch()
    // @ts-ignore
    const numofCakes=useSelector(state=>state.cake.numofCakes)
    return (
        <div>
            <h3>Number of cakes {numofCakes}</h3>
            <button onClick={()=>dispatch(buyCake())}> Add Cake</button>
        </div>
    );
}

export default HookCakeComp;