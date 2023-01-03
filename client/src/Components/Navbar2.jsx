import React from "react";
import { Link } from "react-router-dom";
import Login from "../login-component/login";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Navbar2() {
  let x = useSelector((data) => {
    return data.isAuth;
  });
  let [auth, setAuth] = useState(localStorage.getItem("auth") || false);
  console.log(x);
  return (
    <div
      className="navbar"
      style={{
        width: "100%",
        height: "90px",
        position: "fixed",
        top: "0",
        borderTop: "3px solid #2c4152",
        backgroundColor: "#fff",
        fontFamily: "SourceSansPro",
        boxShadow: "0 3px 6px 0 rgb(0 0 0 / 20%)",
        borderBottom: "1px solid #e0e0e0",
        zIndex: "101",
        marginTop: "-0.5px",
      }}
    >
      <div className="ajio_logo" style={{ width: "150px" }}>
        <Link to="/">
          <img
            src="https://assets.ajio.com/static/img/Ajio-Logo.svg"
            width="130px"
            height="38px"
            alt=""
            style={{
              boxSizing: "border-box",
              margin: "0px 0px 0px",
              cursor: "pointer",
              marginLeft: "10px",
            }}
          />
        </Link>
      </div>
      <div
        className="nav_header_right_outer"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          marginTop: "50px",
          marginLeft: "440px",
        }}
      >
        <div
          className="nav_header_right"
          style={{
            height: "40px",
            width: "712px",
            display: "flex",
            fontFamily: "SourceSansPro",
            marginLeft: "160px",
          }}
        >
          {/* <div className='space_box' style= {{border: "1px solid black",height: "40px", width: "50px"}}>

                </div> */}
          <div
            className="nav_links"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
              width: "670px",
              marginRight: "20px",
              marginLeft: "-150px",
            }}
          >
            <Link
              to={"/products"}
              style={{
                textDecoration: "none",
                color: "#333",
                fontFamily: "SourceSansPro",
                fontSize: "15px",
              }}
            >
              PRODUCTS
            </Link>
            <Link
              to={"/products?cat=Men"}
              style={{
                textDecoration: "none",
                color: "#333",
                fontFamily: "SourceSansPro",
                fontSize: "15px",
              }}
            >
              MEN
            </Link>
            <Link
              to={"/products?cat=Women"}
              style={{
                textDecoration: "none",
                color: "#333",
                fontFamily: "SourceSansPro",
                fontSize: "15px",
              }}
            >
              WOMEN
            </Link>
            <Link
              to={"/kids"}
              style={{
                textDecoration: "none",
                color: "#333",
                fontFamily: "SourceSansPro",
                fontSize: "15px",
              }}
            >
              KIDS
            </Link>
            <Link
              to={"/indie"}
              style={{
                textDecoration: "none",
                color: "#333",
                fontFamily: "SourceSansPro",
                fontSize: "15px",
              }}
            >
              INDIE
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#333",
                fontFamily: "SourceSansPro",
                fontSize: "15px",
              }}
            >
              HOME AND KITCHEN
            </Link>
          </div>
          <div className="nav_searchbar" style={{ display: "flex" }}>
            <input
              type="text"
              placeholder="Search AJIO"
              style={{
                height: "30px",
                width: "250px",
                borderRadius: "17px",
                border: "1px solid #2c4152",
                fontFamily: "Helvetica,sans-serif",
                backgroundColor: "#fffded",
                fontSize: "14px",
                padding: "5px",
              }}
            />
            {/* <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydbUMW2Zs1TT-YXZ_H7D3xwSOh8nPwwD5Rg&usqp=CAU" height= "15px" alt="" style ={{position: "absolute", marginLeft: "-40px", marginTop: "-6px" }}/></div> */}
          </div>
          <div
            className="nav_buttons"
            style={{
              display: "flex",
              width: "120px",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <img
              src="https://assets.ajio.com/static/img/wishlistIcon.svg"
              alt=""
            />
            <Link to="/cart">
              <div
                className="icon_cart"
                style={{
                  backgroundColor: "grey",
                  height: "34px",
                  width: "34px",
                  borderRadius: "17px",
                }}
              >
                <img alt="" style={{ borderRadius: "17px", width: "40px" }} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="guest_header"
        style={{
          width: "600px",
          display: "flex",
          flexDirection: "row-reverse",
          marginTop: "-40px",
          height: "30px",
          justifyContent: "space-evenly",
          marginLeft: "-390px",
        }}
      >
        <div style={{ backgroundColor: "black" }}></div>
        <div>
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              color: "#3E5060",
              fontFamily: "SourceSansPro",
              fontSize: "16px",
            }}
          >
            Contact Us
          </Link>
        </div>
        <div
          style={{
            textDecoration: "none",
            color: "#3E5060",
            fontFamily: "SourceSansPro",
            fontSize: "16px",

            cursor: "pointer",
          }}
        >
          <Login />
        </div>
        <div>
          <Link
            to=""
            style={{
              textDecoration: "none",
              color: "#3E5060",
              fontFamily: "SourceSansPro",
              fontSize: "16px",
            }}
          >
            My Account
          </Link>
        </div>
      </div>
    </div>
  );
}
