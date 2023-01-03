import React, { useEffect } from "react";
import LeftCol from "./LeftCol";
import MidCol from "./MidCol";
import RightCol from "./RightCol";
import "./Cols.css";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = React.useState({});
  useEffect(() => {
    fetch(`http://localhost:3001/product/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

  return (
    <div className="descPage">
      <div className="cols">
        <LeftCol product={product} />
        <MidCol product={product} />
        <RightCol product={product} />
      </div>
    </div>
  );
}
