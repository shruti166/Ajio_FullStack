import React,{useEffect, useState} from 'react'
import { Add,Change } from '../store/action.js'
import {useDispatch,useSelector} from "react-redux"
import "./style.css"
import {Display} from "./Display.js"
import '../App.css';
import { AccordionItem1 } from './AccordionItem.js'
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
} from '@chakra-ui/react'

let mainproduct = {
  width: "80%",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "70px",
  padding: "50px",
}
let mainproductfour = {
  width: "80%",
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: "10px 10px",
  padding: "30px",
}
export const Productpage = () => {
  const [value, setValue] = useControllableState({ defaultValue: [] })
  const[check,setCheck] = useState(true);
let dispatch = useDispatch()
let data = useSelector((storedata)=>(storedata.data))
// useEffect(()=>{
//   if(data.length===0){
//   fetch(`http://localhost:3000/data`)
//   .then(res=>res.json())
//   .then(json=>(Add(json,dispatch),setValue(json)))

//   }
  
// },[])

useEffect(()=>{
  setValue(data)
},[setValue])
function three(){
  setCheck(true);
}
function four(){
  setCheck(false)
}
function Highprice(){
  data.sort((a,b)=>(b.price-a.price))

  setValue(data)
}
function Lowprice(){
  data.sort((a,b)=>(a.price-b.price))
  setValue(data)
}
function Relevance(){
  setValue(data)
}
function Discount(){
 data.sort((a,b)=>(b.offer_percent-a.offer_percent))
 setValue(data)
}
let product_filter = {
  Gender : ["Male","Female"],
  Category : ["Tshirts","Track Pants","Sneakers & Sports Shoes","Shorts & 3/4ths","Sweatshirt & Hoodies","Jackets & Coats","Flip Flop & Slippers","Bags,Belts & Wallets"],
  Price:["Below 500","500-1000","1001-1500","1501-2000","2001-2500","Above 2500"],
  Brand:['PUMA','LEVIS','ADIDAS'],
  Discount:['21-30%','31-40%','41-50','51-80%','Free'],
  Size:['S','M','L','XL','XXL','XXXL']
}
function change_filter(v){
  let arr = data.filter(e=>(v===e.v))
  console.log(arr)
  setValue(arr);
}
  return (
    <div id='parent'>
      <div id='sidebar'>
      <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontWeight = 'bold' fontSize= "25px">
          Refine By
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem >
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontWeight = 'bold'>
          Gender
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionItem1 name={product_filter.Gender} arr={change_filter} />
  </AccordionItem>
</Accordion>
    </AccordionPanel>

    <AccordionPanel pb={4}>
    <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem >
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontWeight = 'bold'>
          Category
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionItem1 name={product_filter.Category} arr={change_filter}/>
  </AccordionItem>
</Accordion>
    </AccordionPanel>

    <AccordionPanel pb={4}>
    <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem >
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontWeight = 'bold'>
          Price
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionItem1 name={product_filter.Price} arr={change_filter}/>
  </AccordionItem>
</Accordion>
    </AccordionPanel>

    <AccordionPanel pb={4}>
    <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem >
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontWeight = 'bold'>
          Discount
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionItem1 name={product_filter.Discount} arr={change_filter}/>
  </AccordionItem>
</Accordion>
    </AccordionPanel>

    <AccordionPanel pb={4}>
    <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem >
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontWeight = 'bold'>
          Brand
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionItem1 name={product_filter.Brand} arr={change_filter}/>
  </AccordionItem>
</Accordion>
    </AccordionPanel>

    <AccordionPanel pb={4}>
    <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem >
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontWeight = 'bold'>
          Size
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionItem1 name={product_filter.Size} arr={change_filter}/>
  </AccordionItem>
</Accordion>
    </AccordionPanel>
    </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          More Filters
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>

  </AccordionItem>
</Accordion>
      </div>
      <div id='mainbar'>
        <div className='navbar'>
          <div>
            <span style={{fontWeight : "bold"}}>{data.length} items found</span>
          </div>
          <div>
            <span>Grid &ensp;</span>
            <button onClick={three} className='three'>
            <button></button><button></button><button></button>
            </button>
            
            <button onClick={four} className='four'>
              <button></button><button></button><button></button><button></button>
            </button>
          </div>
          <div>
          <Menu>
  <MenuButton as={Button} >
    SORT BY
  </MenuButton>
  <MenuList>
    <MenuItem><Button onClick={Highprice}>price(high to low)</Button></MenuItem>
    <MenuItem><button onClick={Relevance}>Relevance</button></MenuItem>
    <MenuItem><button onClick={Discount}>Discount</button></MenuItem>
    <MenuItem><button onClick={Lowprice}>price(low to high)</button></MenuItem>
  </MenuList>
</Menu>
          </div>
          
        </div>
        {value.length>0?
        <div  style={check?mainproduct:mainproductfour}>
        {value.map(e=>(<Display elem = {e} key = {e.id}/>))}
        </div>
        :<div>LOADING...</div>}
        
      </div>
    </div>
  )
}
