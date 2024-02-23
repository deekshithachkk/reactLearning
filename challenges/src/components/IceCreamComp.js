import React from 'react';
import buyIceCream from '../redux/iceCream/IceCreamAction';
import { connect } from 'react-redux';


function IceCreamComp(props) {
    return (
        <div>
            <h2>Number of Icecream {props.numofIcecreams}</h2>
            <button onClick={props.buyIceCream}>Order IceCream</button>
        </div>
    );
}
const mapStateToProps=state=>{
    return{
        numofIcecreams:state.iceCream.numofIcecreams
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamComp);