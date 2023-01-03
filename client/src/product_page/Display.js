import React from "react";
import "./style.css";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { updateAction } from "../store/action";
import { useDispatch, useSelector } from "react-redux";

export const Display = (props) => {
  let navigate = useNavigate();

  console.log(props);
  const ProductItem = (id) => {
    navigate(`/productdetails/${id}`);
  };
  return (
    <div className="product">
      <img
        src={props.elem.image}
        alt={props.elem.title}
        onClick={() => ProductItem(props.elem._id)}
      ></img>
      <h2>{props.elem.brand}</h2>
      <h4>{props.elem.title}</h4>
      <div>
        <p>
          <span>₹</span>
          {props.elem.price}
        </p>
      </div>
      <p className="savings">
        <span>Saved ₹</span>
        {parseInt(props.elem.price) -
          (parseInt(props.elem.price) * parseInt(props.elem.offer_percent)) /
            100}
      </p>
    </div>
  );
};
