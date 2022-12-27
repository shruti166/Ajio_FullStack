import React from "react";
import "./Cols.css";
import { Box, Image } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";



export default function MidCol() {
  const [image, setImage] = useState();
  let showImage = useSelector((storeData) => {
    return storeData.myImage;
    
  })
  console.log(showImage);
  const item = JSON.parse(localStorage.getItem("item"));
  return (
    <div className="mid">
      <Box h="591px" w="473px" bgColor="red">
        <Image
          src={showImage.length == 0 ? item.elem.image[0] : showImage}
          alt="mainimage"
          width="100%"
          height="100%"
        />
      </Box>
      <Tabs size="sm" width="450px" className="tabs" variant="enclosed">
        <TabList>
          <Tab>RETURNS</Tab>
          <Tab>OUR PROMISE</Tab>
        </TabList>
        <TabPanels>
          <TabPanel fontSize="14px">
            <p>
              Easy 10 days return and exchange. Return Policies may vary based
              on products and promotions. For full details on our Returns
              Policies, please click here․
            </p>
          </TabPanel>
          <TabPanel fontSize="14px">
            <p>We assure the authenticity and quality of our products</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
