
import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../App.css';


export default function Navbar() {
    // const [data, setData] = useState([]);
    // const fetchDataBycategory = () => {
    //     fetch('https://fakestoreapi.com/products/categories')
    //         .then(res=>res.json())
    //         .then(res2=>setData(res2));
    //         console.log(data);
    // }

    //     useEffect(()=> {
    //         fetchDataBycategory();
    //     }, [])
    const openDrawer = () => {
        
        document.getElementsByClassName("drawer")[0].style.visibility = "visible";
    }
    const closeDrawer = () => {
        document.getElementsByClassName("drawer")[0].style.visibility = "hidden";
    }
  return (
    <div className= "navbar" style = {{width: "100%", position :"fixed",top: "0",height: "90px", borderTop: "3px solid #2c4152", backgroundColor: "#fff",fontFamily: "SourceSansPro", boxShadow: "0 3px 6px 0 rgb(0 0 0 / 20%)", borderBottom: "1px solid #e0e0e0",  zIndex: "900"}}>
        <div className= "ajio_logo" style = {{display: "flex", alignItems: "flex-start", marginLeft: "127px"}} >
            <img src="https://assets.ajio.com/static/img/Ajio-Logo.svg" width = "130px" height = "38px" alt="" style = {{boxSizing: "border-box", margin: "24px 0px 0px", cursor: "pointer"}} />
        </div>
        <div className='nav_header_right_outer' style = {{  display: "flex", flexDirection: "row"}}>
            <div className='nav_header_right' style = {{width: "712px", height: "40px" , display: "flex" ,fontFamily: "SourceSansPro",  marginLeft:"260px",  marginTop: "-5px"}}>
               
                <div className='space_box' style= {{height: "40px", width: "200px"}}>

                </div>
                <div className='nav_links' style = {{display: "flex", justifyContent: "space-between", alignContent: "center", width: "492px"}}>
                    <Link to = {"/men"} style = {{textDecoration: "none", color: "#333", fontFamily: "SourceSansPro", fontSize: "15px"}}>MEN</Link>
                    <Link to = {"/women"} style = {{textDecoration: "none", color: "#333", fontFamily: "SourceSansPro", fontSize: "15px"}}>WOMEN</Link>
                    <Link to = {"/kids"} style = {{textDecoration: "none", color: "#333", fontFamily: "SourceSansPro", fontSize: "15px"}}>KIDS</Link>
                    <Link to = {"/indie"} style = {{textDecoration: "none", color: "#333", fontFamily: "SourceSansPro", fontSize: "15px"}}>INDIE</Link>
                    <Link to = "/" style = {{textDecoration: "none", color: "#333", fontFamily: "SourceSansPro", fontSize: "15px"}}>HOME AND KITCHEN</Link>
                </div>
                
            </div>
            <div className='nav_searchbar' style = {{display: "flex"}}>
                <input type="text" placeholder='Search AJIO' style ={{paddingLeft: "15px",paddingBottom: "7px" , paddingRight: "17px", height: "30px", width: "269px", paddingTop: "12px", marginLeft: "2px", marginTop: "-20px", borderRadius: "17px", border: "1px solid #2c4152", fontFamily: "Helvetica,sans-serif", backgroundColor: "#fffded", fontSize: "14px" }}/>
                {/* <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydbUMW2Zs1TT-YXZ_H7D3xwSOh8nPwwD5Rg&usqp=CAU" height= "15px" alt="" style ={{position: "absolute", marginLeft: "-40px", marginTop: "-6px" }}/></div> */}
            </div>
            <div className='nav_buttons' style = {{display: "flex", width: "100px", justifyContent: "space-evenly", alignItems: "center", marginTop: "-35px"}}>
                <img src="https://assets.ajio.com/static/img/wishlistIcon.svg" alt="" />
                <div className='icon_cart' style = {{backgroundColor: "#2A3F51", height: "34px", width:"34px", borderRadius: "17px"}}>
                  
                </div>

            </div>
            
        </div>
        <div className='guest_header' style = {{display: "flex", flexDirection: "row-reverse" ,width: "500px", justifyContent: "space-evenly" ,alignItems: "center", marginTop: "-150px", marginLeft: "920px"}}>
                    <div></div>
                    <div style = {{backgroundColor: "black", padding: "5px 10px 7px"}}><Link to = "" style = {{textDecoration: "none", color: "#fff", fontFamily: "SourceSansPro", fontSize: "12px"}}>Vist AJIOLUXE</Link></div>
                    <div><Link to = "/contact" style = {{textDecoration: "none", color: "#3E5060", fontFamily: "SourceSansPro", fontSize: "12px"}}>Contact Us</Link></div>
                    <div><Link to = " " style = {{textDecoration: "none", color: "#3E5060", fontFamily: "SourceSansPro", fontSize: "12px"}}>Sign Out</Link></div>
                    <div><Link to = "" style = {{textDecoration: "none", color: "#3E5060", fontFamily: "SourceSansPro", fontSize: "12px"}}>My Account</Link></div>
                    
                   
                    
        </div>
        
            
            {/* <div className= "drawer" style = {{width: "1200px" ,height: "500px", backgroundColor: "black", margin: "auto",marginTop: "55px", opacity: "1", display: "block", textTransform: "capitalize", backgroundColor: "#fff", outline: "transparent" ,border: "1px solid grey"}}>
                    {/* {data.map((elem) => {
                        return <ul>
                            <ul>{elem}</ul>
                            
                        </ul>
                    }) } */}


                    {/* <div class = "menu_first" style = {{display: "flex", justifyContent: "space-evenly", textAlign: "left"}}>
                        <div className='firstList' style = {{border: "1px solid blue", width: "290px",height: '363px', color: "#333", fontSize: '14px'}}>
                           <ul><h5>CLOTHING</h5></ul>
                           <ul><h5>FOOTWEAR</h5></ul>
                           <ul><h5>ACCESSORIES</h5></ul>
                           <ul><h5>ALL THATS NEW</h5></ul>
                           <ul>Clothing</ul>
                           <ul>Accessories</ul>
                           <ul>Footwear</ul>
                        
                           <ul><h5>INTERNATIONAL BRAND</h5></ul>
                           <ul><h5>WINTERWEAR</h5></ul>
                           <ul><h5>NIGHT & LOUNDWEWEAR</h5></ul>
                           <ul><h5>GROMING</h5></ul>
                           <ul><h5>ETHNIC AND FESTIVE</h5></ul>
                        </div> */}
                        {/* <div style = {{border: "1px solid blue",width: "290px",height: '363px', color: "#333", fontSize: '14px' }}>
                            <ul><h5>WESTERN WEAR</h5></ul>
                            <ul>Jackets</ul>
                            <ul>Coat</ul>
                            <ul>Jeans</ul>
                            <ul>Shirt</ul>
                            <ul>SweatShirts</ul>
                            <ul>Pants</ul>
                            <ul>Trousers</ul>
                            <ul>Tshirts</ul>
                            <ul>Track Pants</ul>
                            <ul><h5>FOOTWEAR</h5></ul>
                            <ul>Casual Shoes</ul>
                            <ul>Flip flops & Slippers</ul>
                            <ul>Formal shoes</ul>
                            <ul>Sandals</ul>
                            <ul>Sneakers</ul>
                            <ul>Sport Shoes</ul>
                        </div>
                        <div style =  {{border: "1px solid blue", width: "250px", }}></div>
                        <div style =  {{border: "1px solid blue", width: "250px", }}></div>
                    </div> */} 
            {/* </div> */}
    
    </div>

    

    
        
  )
}

