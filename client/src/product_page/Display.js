import React from 'react'
import "./style.css"
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { updateAction } from '../store/action';
import {useDispatch,useSelector} from "react-redux";

export const Display = (props) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
 console.log(props);
  const ProductItem = () => {
      localStorage.setItem("item", JSON.stringify(props));
      updateAction(props, dispatch);
      navigate("/productdetails");
  }
  return (
    <div className='product' onClick = {ProductItem}>
        <img src={props.elem.image[0]} alt={props.elem.title}></img>
        <h2>{props.elem.brand}</h2>
        <h4>{props.elem.title}</h4>
        <div>
            <p><span>₹</span>{(props.elem.price)*(props.elem.offer_percent)/100}</p>
            <p className='Striked'>₹{props.elem.price}</p><span>({props.elem.offer_percent}%)</span>
        </div>
        <p className='savings'><span>Saved ₹</span>{parseInt(props.elem.price)-(parseInt(props.elem.price)*parseInt(props.elem.offer_percent))/100}</p>
    </div>
  )
}
