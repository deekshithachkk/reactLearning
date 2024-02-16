import { slides } from "../../constant";
import React, { useReducer, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Slide() {
    const initialState=0;
    const reducer=(state,action)=>{
        switch(action.type){
            case "+":return state+1;
            case "-":return state-1;
            default: return state;
        }
    }
//   const [active, setActive] = useState(0);
  const [active,dispatch]=useReducer(reducer,initialState)

  return (
    <div className="slide-wrapper">
      <div className="slide">
        <button
          className="button-container"
          // @ts-ignore
          onClick={()=>dispatch({type:"-"})}
          disabled={active <= 0}
        >
          <FiChevronLeft className="icons" />
        </button>
        <div className="slide-contianer ">
          <img src={slides[active]} className="image-width" alt="slide_image" />
        </div>
        <button
          className="button-container"
        // @ts-ignore
        onClick={()=>dispatch({type:"+"})}
          disabled={active >= slides.length-1}
        >
          <FiChevronRight className="icons" />
        </button>
      </div>
    </div>
  );
}

export default Slide;
