import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
export default function Footer() {
    
  return (<div className='outerFooter' style = {{backgroundColor: "#2c4152", height: "500px", color: "#ccc", width: "100%"}}>
            
            <div className='mainFooter' style = {{  height: "400px",display: "flex", flexDirection: "row",justifyContent: "space-evenly", width: "90%", textAlign: "left", margin:" auto" }}>
                <div style = {{width: "300px", height: "178px", boxSizing: "border-box", marginTop: "40px"}}>
                    <ul style = {{textDecoration: "none", fontSize: "14px", fontFamily: "SourceSansPro", color: "#ccc"}}>Ajio</ul>
                    <ul ><Link to ="" style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>Who we are</Link></ul>
                    <ul><Link to ="" style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>Join Our team</Link></ul>
                    <ul><Link to ="" style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>Terms and Conditions</Link></ul>
                    <ul><Link to ="" style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>WE respect your Privacy</Link></ul>
                    <ul><Link to = "" style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>Fees and Payments</Link></ul>
                    <ul><Link to = "" style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>Returns & Refund Policy</Link></ul>
                    <ul><Link to = "" style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>Promotion Terms and Conditions</Link></ul>
                </div>
                <div style = {{width: "300px", height: "215px", boxSizing: "border-box", marginTop: "40px"}}>
                    <ul><Link to = "" style = {{textDecoration: "none", fontSize: "14px", fontFamily: "SourceSansPro", color: "#ccc"}}>Help</Link></ul>
                    <ul><Link to = "" style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>Track Your order</Link></ul>
                    <ul><Link to = "" style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>Frequently asked questions</Link></ul>
                    <ul><Link to = "" style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>Returns</Link></ul>
                    <ul><Link to = "" style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>Cancellations</Link></ul>
                    <ul><Link to = "" style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>Payments</Link></ul>
                    <ul><Link to = "" style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>Customer Care</Link></ul>
                    <ul><Link to = "" style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>How do I redeem my coupon</Link></ul>
                </div>
                <div style = {{ width: "300px", height: "266px", boxSizing: "border-box", marginTop: "40px"}}>
                    <ul><Link style = {{textDecoration: "none", fontSize: "14px", fontFamily: "SourceSansPro", color: "#ccc"}}>Shop By</Link></ul>
                    <ul><Link style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>Men</Link></ul>
                    <ul><Link style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>Women</Link></ul>
                    <ul><Link style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>Kids</Link></ul>
                    <ul><Link style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>Indie</Link></ul>
                    <ul><Link style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>Stores</Link></ul>
                    <ul><Link style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>New Arrival</Link></ul>
                    <ul><Link style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>Brands Directory</Link></ul>
                    <ul><Link style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>Home</Link></ul>
                    <ul><Link style = {{textDecoration: "none", fontSize: "12px", fontFamily: "SourceSansPro", color: "#ccc"}}>Collections</Link></ul>
                </div>
                <div style = {{width: "300px", height: "164px", boxSizing: "border-box", marginTop: "40px"}}>
                    <ul><Link style = {{textDecoration: "none", fontSize: "14px", fontFamily: "SourceSansPro", color: "#ccc"}}>Follow us</Link></ul>
                    <ul><Link style = {{textDecoration: "none", fontSize: "14px", fontFamily: "SourceSansPro", color: "#ccc"}}>Facebook</Link></ul>
                    <ul><Link style = {{textDecoration: "none", fontSize: "14px", fontFamily: "SourceSansPro", color: "#ccc"}}>Instagram-AJIOLife</Link></ul>
                    <ul><Link style = {{textDecoration: "none", fontSize: "14px", fontFamily: "SourceSansPro", color: "#ccc"}}>Instagram-AJIO LUXE</Link></ul>
                    <ul><Link style = {{textDecoration: "none", fontSize: "14px", fontFamily: "SourceSansPro", color: "#ccc"}}>Twitter</Link></ul>
                    <ul><Link style = {{textDecoration: "none", fontSize: "14px", fontFamily: "SourceSansPro", color: "#ccc"}}>Pinterest</Link></ul>
                    
                </div>
               

            </div>
            <div style = {{width: "90%", margin: "auto"}}>
                <hr />
            </div> 
            
    </div>

  )
}


