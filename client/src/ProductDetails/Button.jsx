import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { updateCart } from "../store/action";
import "./Button.css";
import { BsHandbag, BsHeart } from "react-icons/bs";
import { useDispatch } from "react-redux";

export default function ButtonComp() {
  const item = JSON.parse(localStorage.getItem("item"));

  const arr = JSON.parse(localStorage.getItem("cart")) || []
  let dispatch = useDispatch();
  const addToCart  = ()=> {

    arr.push(item);
    localStorage.setItem("cart", JSON.stringify(arr));


  }
  return (
    <div className="btnPage">
      <Button className="addBtn" onClick = {addToCart}>
        <span className="btnLogo">
          <BsHandbag />
        </span>
        ADD TO BAG
      </Button>
      <div className="qua">HANDPICKED STYLES | ASSURED QUALITY</div>
      <Button className="wishBtn">
        <span className="btnLogo">
          <BsHeart />
        </span>
        SAVE TO WISHLIST
      </Button>
    </div>
  );
}
