// import { Input } from "@chakra-ui/react";

// export default function Option() {

//     return (
//         <div>
//             <p>Enter OTP</p>
//             <Input placeholder="Enter OTP" />
//         </div>
//     )
// }


import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React from "react";
import "../login.css";
// import { logInAction } from "../store/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Otp() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let dispatch = useDispatch();
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    let navigate = useNavigate();

    const handleLogIn = () => {
        navigate("/");
    }

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Sign In with OTP</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Enter OTP</FormLabel>
                            <Input ref={initialRef} placeholder='Enter OTP' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button  onClick = {handleLogIn}>
                            START SHOPPING
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Otp;

