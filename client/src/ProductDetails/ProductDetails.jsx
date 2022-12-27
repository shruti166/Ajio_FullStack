import React from "react";
import LeftCol from "./LeftCol";
import MidCol from "./MidCol";
import RightCol from "./RightCol";
import "./Cols.css";

export default function ProductDetails() {


  return (
    <div className="descPage">
      <div className="cols">
        {/* <div className="leftMid">
        </div> */}
        {/* <div> */}
        <LeftCol />
        <MidCol />
        <RightCol />
        {/* </div> */}
      </div>
    </div>
  );
}
