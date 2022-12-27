import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import React from "react";
import "../login.css"

function Signup(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <div className="signup_parent_div">
            <span onClick={onOpen}>Sign Up</span>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <div className="model_content_wrap_div">
                        <button onClick={onClose} className="ChevronLeftIcon_backbtn"><ChevronLeftIcon /> Back</button>
                        <ModalHeader fontSize="4xl" pt="16">Welcome to AJIO</ModalHeader>
                        <p className="account_set_para">Please set up yours account</p>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <Text mt="4">{props.value.email}</Text>
                            </FormControl>
                            <FormControl>
                                <FormLabel><h3>Enter Name</h3></FormLabel>
                                <Input placeholder="Name" variant="flushed" />
                            </FormControl>
                            <FormControl>
                                <FormLabel><h3>Enter Mobile No.</h3></FormLabel>
                                <Input placeholder="Mobile No." variant="flushed" />
                                <Text fontSize='xs'>OTP will be sent to your number for verification.</Text>
                            </FormControl>
                            <FormControl>
                                <FormLabel><h3>Enter Password</h3></FormLabel>
                                <Input placeholder="Password" type="password" variant="flushed" />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <button className="login_btn" onClick={() => {
                                props.value.func();
                                onClose();
                            }}>
                                SignUp
                            </button>
                        </ModalFooter>
                        <div className="account_create_class"></div>
                    </div>
                </ModalContent>
            </Modal>
        </div>

    )
}

export default Signup;