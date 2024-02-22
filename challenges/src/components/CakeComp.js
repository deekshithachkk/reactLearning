import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/cake/CakeAction';


function CakeComp(props) {
  const dispatch=useDispatch()
  const cakes = useSelector((state) => state);
  // @ts-ignore
  console.log(cakes.numofCakes  )
    return (
        <div>
          <p>numberof cakes{props.numofCakes}</p> 
          <button onClick={props.buyCake}>Add cake</button> 

        </div>
    );
}
const mapStateToProps=state=>{
  return{
    numofCakes:state.numofCakes
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    buyCake:()=>dispatch(buyCake())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeComp);