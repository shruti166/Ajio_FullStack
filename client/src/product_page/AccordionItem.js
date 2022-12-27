import React from 'react'
import '../App.css';
import {
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
    Flex,
  } from '@chakra-ui/react'

export const AccordionItem1 = ({name,arr}) => {
  return (
    name.map(e=>(
      <AccordionPanel pb={4}>
      <input value={e} onChange={function(e){arr(e)}} type="checkbox"></input>&nbsp;
      <label>{e}</label></AccordionPanel>
    ))
  )
}
