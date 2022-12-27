import React from 'react';
import { useState, useEffect } from 'react';
import './Checkout.css';
import { Input, Select } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Checkout() {
    let [bagtotal, setTotal] = useState("0");
    let [totalprice, setPrice] = useState("0");
    let [cartData, setCartData] = useState(JSON.parse(localStorage.getItem("cart")));

    useEffect(() => {
        setTotal(0);
        setPrice(0);
        cartData.map((e) => {
            setTotal((prev) => (parseInt(prev) + ((e.elem.price) + ((e.elem.offer_percent) / 100) * (e.elem.price))))
            setPrice((prev) => (parseInt(prev) + (parseInt(e.elem.price) * parseInt(e.elem.Quantity))))
        })
    }, [cartData])
  return (
    <div className="cart_parent_div">
        <div className="cart_parent_child_div" style = {{textAlign: "left"}}>
                <label form='' >Enter your card type :</label><br />
                <Select name="" id="">
                    <option value="">VISA</option>
                    <option value="RUpay">RUPAY</option>
                    <option value="">MASTER CARD</option>

                </Select><br />
                <label form=''>Card Number</label><br />
                <Input type="text" placeholder = "ENTER CARD NUMBER"/><br/>
                <label form=''>Name</label><br />
                <Input type="text" placeholder='ENTER NAME ON CARD'/><br />
                <label form=''>Expiry date</label><br />
                <Input type="date" /><br />
                <label form=''>CVV</label><br />
                <Input type="password" placeholder='ENTER CVV'/><br />

               
         

        </div>
        <div className="total_price_parent_div">
                <h4>Order Details</h4>
                <p>Bag total <span className="span1">Rs. {bagtotal}</span></p>
                <p>Bag discount<span className="span2">-Rs. {bagtotal - totalprice}</span></p>
                <p>Delivery Fee<span className="span3">Free <span>Rs. 99.00</span></span></p>
                <h4>Order Total<span className="span4">Rs. {totalprice}</span></h4>
                <Link to = "/confirmation"><button onClick = {(() => {
                    
                })}>PROCEED TO PAYMENT</button></Link>
        </div>
    </div>
  )
}
