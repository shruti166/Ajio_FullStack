import React, { useEffect, useState } from "react";
import { Add, Change } from "../store/action.js";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { Display } from "./Display.js";
import "../App.css";
import { AccordionItem1 } from "./AccordionItem.js";
import { useSearchParams } from "react-router-dom";
import {
  useControllableState,
  MinusIcon,
  AddIcon,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

let mainproduct = {
  width: "80%",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "70px",
  padding: "50px",
};
let mainproductfour = {
  width: "80%",
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: "10px 10px",
  padding: "30px",
};
export const Productpage = () => {
  const [value, setValue] = useState([]);
  console.log(value);
  // let { cat = "" } = useParams();
  const [check, setCheck] = useState(true);

  let [searchParams, setSearchParams] = useSearchParams();
  let cat = searchParams.get("cat") || "";
  let q = searchParams.get("q") || "";
  let size = searchParams.get("size") || "";
  let sort = searchParams.get("sort") || "_id";
  let order = searchParams.get("order") || "asc";

  console.log(cat);
  console.log(searchParams, "sdf");
  const getData = () => {
    fetch(
      `http://localhost:3001/product?cat=${cat}&q=${q}&size=${size}&sort=${sort}&order=${order}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "res");
        setValue(res);
      })
      .catch((err) => {
        console.log(err, "er");
      });
    console.log("call");
  };

  useEffect(() => {
    getData();
  }, [cat, q, size, sort, order]);
  console.log(value);

  return (
    <div id="parent">
      <div id="sidebar">
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontWeight="bold"
                  fontSize="25px"
                >
                  Refine By
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" fontWeight="bold">
                        Gender
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <input
                    value="Male"
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        searchParams.set("cat", "Men");
                        setSearchParams(searchParams);
                      } else {
                        searchParams.set("cat", "");
                        setSearchParams(searchParams);
                      }
                    }}
                  ></input>
                  &nbsp;
                  <label>Male</label>
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        searchParams.set("cat", "Women");

                        setSearchParams(searchParams);
                      } else {
                        searchParams.set("cat", "");

                        setSearchParams(searchParams);
                      }
                    }}
                  ></input>
                  &nbsp;
                  <label value="Female">Female</label>
                </AccordionItem>
              </Accordion>
            </AccordionPanel>

            <AccordionPanel pb={4}>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" fontWeight="bold">
                        Category
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        searchParams.set("q", "tshirt");
                        setSearchParams(searchParams);
                      } else {
                        searchParams.set("q", "");
                        setSearchParams(searchParams);
                      }
                    }}
                  ></input>
                  &nbsp;
                  <label value="tshirt">T-shirt</label>
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        searchParams.set("q", "kurta");
                        setSearchParams(searchParams);
                      } else {
                        searchParams.set("q", "");
                        setSearchParams(searchParams);
                      }
                    }}
                  ></input>
                  &nbsp;
                  <label value="tshirt">Kurta</label>
                </AccordionItem>
              </Accordion>
            </AccordionPanel>

            <AccordionPanel pb={4}>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" fontWeight="bold">
                        Price
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <input type="checkbox"></input>
                  &nbsp;
                  <label value="tshirt">Below 500</label>
                  <br />
                  <input type="checkbox"></input>
                  &nbsp;
                  <label value="tshirt">Above 500</label>
                </AccordionItem>
              </Accordion>
            </AccordionPanel>

            <AccordionPanel pb={4}>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" fontWeight="bold">
                        Size
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        searchParams.set("size", "S");
                        setSearchParams(searchParams);
                      } else {
                        searchParams.set("size", "");
                        setSearchParams(searchParams);
                      }
                    }}
                  ></input>
                  &nbsp;
                  <label value="tshirt">S</label>
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        searchParams.set("size", "M");
                        setSearchParams(searchParams);
                      } else {
                        searchParams.set("size", "");
                        setSearchParams(searchParams);
                      }
                    }}
                  ></input>
                  &nbsp;
                  <label value="tshirt">M</label>
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        searchParams.set("size", "L");
                        setSearchParams(searchParams);
                      } else {
                        searchParams.set("size", "");
                        setSearchParams(searchParams);
                      }
                    }}
                  ></input>
                  &nbsp;
                  <label value="tshirt">L</label>
                </AccordionItem>
              </Accordion>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  More Filters
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
          </AccordionItem>
        </Accordion>
      </div>
      <div id="mainbar">
        <div className="navbar">
          <div></div>
          <div>
            <span>Grid &ensp;</span>
            <button className="three">
              <button></button>
              <button></button>
              <button></button>
            </button>

            <button className="four">
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </button>
          </div>
          <div>
            <Menu>
              <MenuButton as={Button}>SORT BY</MenuButton>
              <MenuList>
                <MenuItem>
                  <button
                    onClick={() => {
                      searchParams.set("sort", "price");
                      searchParams.set("order", "asc");
                      setSearchParams(searchParams);
                    }}
                  >
                    price(low to high)
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    onClick={() => {
                      searchParams.set("sort", "price");
                      searchParams.set("order", "desc");
                      setSearchParams(searchParams);
                    }}
                  >
                    price(high to low)
                  </button>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        {value.length > 0 ? (
          <div style={check ? mainproduct : mainproductfour}>
            {value.map((e) => (
              <Display elem={e} key={e.id} />
            ))}
          </div>
        ) : (
          <div>LOADING...</div>
        )}
      </div>
    </div>
  );
};
