import React, { useState } from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { updateQunatitySize } from "../store/action";

function Quenatity(props) {
    let [noOfItem, setNoItem] = useState(props.value.quantity);
    let dispatch = useDispatch();
    let cartData = useSelector((storedata) => { return storedata.cart });

    const updateQuantity = () => {
        cartData.map((e, ind) => {
            if (ind == props.value.index) {
                e.elem.Quantity = noOfItem
            }
        })
        updateQunatitySize(cartData, dispatch);
    }

    const itemQuanttity = (value) => {
        setNoItem((prev) => (parseInt(prev) + value))
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <div className="signup_parent_div">
            <span onClick={onOpen}>Qty</span>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel fontSize="xl" fontWeight="bold" mt="5"><h3>Select quantity</h3></FormLabel>
                            <Text fontSize='lg' fontWeight="medium" mt="7"><Button colorScheme="facebook" mr="5" disabled={noOfItem < 2} onClick={() => itemQuanttity(-1)} >-</Button>{noOfItem} <Button colorScheme="facebook" ml="5" onClick={() => itemQuanttity(1)}>+</Button></Text>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <button className="update_Quantity_Button" onClick={() => {
                            onClose();
                            updateQuantity();
                        }}>
                            UPDATE
                        </button>
                        <button onClick={() => {
                            onClose();
                        }}>
                            Cancel
                        </button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>

    )
}

export default Quenatity