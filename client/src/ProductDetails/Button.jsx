import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { updateCart } from "../store/action";
import "./Button.css";
import { BsHandbag, BsHeart } from "react-icons/bs";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function ButtonComp() {
  const item = JSON.parse(localStorage.getItem("item"));
  const navigate = useNavigate();
  const arr = JSON.parse(localStorage.getItem("cart")) || [];

  const [product, setProducet] = useState({
    name: "TShirt",
    price: 300,
  });
  let dispatch = useDispatch();
  const addToCart = () => {
    arr.push(item);
    localStorage.setItem("cart", JSON.stringify(arr));
  };
  const payNow = () => {
    axios
      .post("http://localhost:3001/payment")
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((er) => {
        console.log(er);
      });
  };
  return (
    <div className="btnPage">
      <Button className="addBtn" onClick={payNow}>
        <span className="btnLogo">
          <BsHandbag />
        </span>
        pay Now
      </Button>
      <div className="qua">HANDPICKED STYLES | ASSURED QUALITY</div>
      <Button className="wishBtn">
        <span className="btnLrogo">
          <BsHeart />
        </span>
        SAVE TO WISHLIST
      </Button>
    </div>
  );
}
