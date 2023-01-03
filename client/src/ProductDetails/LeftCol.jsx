import React from "react";
import { Image, VStack } from "@chakra-ui/react";
import { ImageAction } from "../store/action";
import { useDispatch } from "react-redux";

export default function LeftCol() {
  let dispatch = useDispatch();
  const item = JSON.parse(localStorage.getItem("item"));
  const handleImage = (data) => {
    ImageAction(data, dispatch);
  };

  return (
    <div className="left">
      {/* <VStack direction="column">
        <Image
          boxSize="52px"
          height="66px"
          object-fit="cover"
          src={item.elem.image[0]}
          alt="iamge"
         onClick = {() => handleImage(item.elem.image[0])}/>
        <Image
          boxSize="52px"
          height="66px"
          object-fit="cover"
          src={item.elem.image[1]}
          alt="iamge"
          onClick = {() => handleImage(item.elem.image[1])}/>
        <Image
          boxSize="52px"
          height="66px"
          object-fit="cover"
          src={item.elem.image[2]}
          alt="iamge"
          onClick = {() => handleImage(item.elem.image[2])}/>
        <Image
          boxSize="52px"
          height="66px"
          object-fit="cover"
          src={item.elem.image[3]}
          alt="iamge"
          onClick = {() => handleImage(item.elem.image[3])}/>
        
      </VStack> */}
    </div>
  );
}
