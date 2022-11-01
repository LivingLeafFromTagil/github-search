import React from "react";
import { useNavigate } from "react-router-dom";

export const NavigationButton = (props) => {
  const navigate = useNavigate();

  const onReturn = () => {
    navigate(props.location);
  }

  return(
    <button 
      className="border bg-black text-white p-3 w-32 rounded-3xl  hover:bg-white hover:text-black transition-all" 
      onClick={onReturn}
      disabled={props.disabled}
      >
        {props.text}
      </button>
  )
}