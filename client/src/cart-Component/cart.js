import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartAction } from "../store/action";
import "./cart.css"
import Quenatity from "../cart-Component/quantity-cart";
import { useNavigate } from "react-router-dom";



function Cart() {
    let dispatch = useDispatch();
    let [bagtotal, setTotal] = useState("0");
    let [totalprice, setPrice] = useState("0");
    let [cartData, setCartData] = useState(JSON.parse(localStorage.getItem("cart")));
    let navigate = useNavigate();
    console.log(cartData);
    // let cartData = useSelector((storedata) => { return storedata.cart })
    useEffect(() => {
        setTotal(0);
        setPrice(0);
        cartData.map((e) => {
            setTotal((prev) => (parseInt(prev) + ((e.elem.price) + ((e.elem.offer_percent) / 100) * (e.elem.price))))
            setPrice((prev) => (parseInt(prev) + (parseInt(e.elem.price) * parseInt(e.elem.Quantity))))
        })
    }, [cartData])

    const deleteItem = (ind) => {
        deleteCartAction(cartData, dispatch, ind)
    }

    return (
        <div className="cart_parent_div">
            <div className="cart_parent_child_div">
                <p>My Bag <span>({cartData.length})</span></p>
                {cartData.map((e, ind) => {
                    return <div key={ind + 1} className="cart_child_div">
                        <img src={e.elem.image[0]} alt={e.elem.title} />
                        <p className="cart_div_child_p">{e.elem.title}</p>
                        <div className="cart_child_child1_div"><Quenatity value={{ index: ind, quantity: e.elem.Quantity }} /> {e.elem.Quantity}</div>
                        <div className="cart_child_child_div">
                            <p>Savings : <span className="price_brown_class">Rs. {(parseInt((e.elem.price) + ((e.elem.offer_percent) / 100) * (e.elem.price)) * e.elem.Quantity) - e.elem.price}</span></p>
                            <p className="price_brown_class_line">Rs. {(parseInt((e.elem.price) + ((e.elem.offer_percent) / 100) * (e.elem.price)) * e.elem.Quantity)}</p><span className="price_brown_class"> ({Math.floor(e.elem.offer_percent)}%)</span>
                            <p>Rs. {(e.elem.price) * e.elem.Quantity}.00</p>
                            <button onClick={() => deleteItem(ind)}>Delete</button>
                        </div>
                    </div>
                })}
            </div>
            <div className="total_price_parent_div">
                <h4>Order Details</h4>
                <p>Bag total <span className="span1">Rs. {parseInt(bagtotal)}</span></p>
                <p>Bag discount<span className="span2">-Rs. {parseInt(bagtotal - totalprice)}</span></p>
                <p>Delivery Fee<span className="span3">Free <span>Rs. 99.00</span></span></p>
                <h4>Order Total<span className="span4">Rs. {parseInt(totalprice)}</span></h4>
                <button onClick = {(() => {
                    navigate("/payment");
                })}>PROCEED TO SHIPPING</button>
            </div>
        </div >
    )
}

export default Cart;