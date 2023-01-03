import React from "react";
import "../ProductDetails/Cols.css";
import ButtonComp from "./Button";
import { IoLocationOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function RightCol({ product }) {
  return (
    <div className="prodDetails">
      <h1 className="prodName">{product.title}</h1>
      {/* <h3 className="price">{product.price}</h3> */}
      <div className="strPriceDis">
        MRP <span className="strPrice">₹{product.price}</span>
        <span className="dis">
          <strong> ({product.offer_percent}%)</strong>
        </span>
      </div>
      <p>Price inclusive of all taxes</p>
      <div className="offerImg">
        <img src="../Images/offer.png" alt="offer" />
      </div>

      <div className="sizeToDeliver">
        <span className="locaIcon">
          <IoLocationOutline />
        </span>
        Select your size to know your estimated delivery date.
      </div>

      <ButtonComp title={product.title} price={product.price} />

      <div className="prodDesc">
        <h3>Product Details</h3>
        <ul className="ul">
          <li>Winterwear</li>
          <li>
            Wear this stylish Suede jacket from the house of Campus Sutra. The
            Suede jacket is comfortable to wear as the fabrics are light on the
            skin. Using stellar quality solvents,
          </li>
          <li>
            SLEEVE TYPE: Full long sleeve. Designed to offer an energetic look,
            the bomber jacket combines the warmth of comfortable and casual
            feel. Offering an elevated look, it showcases a perfect fit.
          </li>
          <li>
            Suede Febric : Long Sleeve : Winter Wear : Solid Jacket : Smoth
            Jacket : Casual Wear : Western Wear
          </li>
          <li>Regular Fit</li>
          <li>Package contains : 1 jacket</li>
          <li>Machine wash</li>
          <li>All weather</li>
        </ul>
      </div>
    </div>
  );
}
