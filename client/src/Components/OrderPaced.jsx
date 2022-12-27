import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export default function OrderPaced() {
  return (
    <div style = {{width: "50%", margin: "auto", marginTop: "150px", marginBottom: "50px"}}>
        <img src="https://thumbs.gfycat.com/GracefulImpishFlea-size_restricted.gif" alt="" />
        <Link to = "/"><Button mt = {10} mr = {10}>CONTINUE SHOPPING</Button></Link>
    </div>
  )
}
