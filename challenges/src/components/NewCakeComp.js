import React, { useState } from 'react';
import { buyCake } from '../redux/cake/CakeAction';
import { connect } from 'react-redux';

function NewCakeComp(props) {
    const [number,setNumber]=useState(1)
    return (
        <div>
            <input value={number} onChange={(e)=>setNumber(
// @ts-ignore
            e.target.value)} />
            <button onClick={()=>props.buyCake(number)}>Add {number} Cake</button>
        </div>
    );
}
const mapStateToProps=state=>{
    return {
        numofCakes:state.cake.numofCakes
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        buyCake:(number)=>dispatch(buyCake(number))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewCakeComp);