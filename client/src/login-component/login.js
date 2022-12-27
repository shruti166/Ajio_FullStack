import React, { useRef, useState } from "react";
import { Button, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, PinInput, PinInputField, useDisclosure, Text } from "@chakra-ui/react"
import Signup from "./signup";
import "../login.css"

function Login() {
    let [flag, setFlag] = useState(true);
    let [flag2, setFlag2] = useState(false);
    let email = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const addUser = async (users) => {
        
        let details = {
            email: email.current.value,
        }
        users.push(details);
        localStorage.setItem("logIn", JSON.stringify(users));
    }

    const checkUser = (users) => {
        let x = false;
        users.map((elem) => {
            if (elem.email == email.current.value) {
                x = true;
            }
        })
        if (x == true) {
            setFlag(false);
            email.current.value = "";
        }
        else {
            addUser(users)
            setFlag2(true);
        }
    }


    const handleLogin = async () => {
        if (!email.current.value) {
            alert("Enter Email")
        }
        else {
            let loginData = JSON.parse(localStorage.getItem("logIn")) || [];

            checkUser(loginData);
        }
       localStorage.setItem("auth", true);
    
    }

    const getOtp = () => {
        setFlag(false);
        email.current.value = "";
    }

    return (
        <div>
            <p onClick={onOpen}>Sign In</p>
            {flag ?
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader fontSize="4xl" pt="16">Welcome to AJIO</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel fontSize="xl">Join / Sign In using</FormLabel>

                                <img onClick={getOtp} className="facebook_logo" src="https://thumbs.dreamstime.com/b/facebook-background-facebook-icon-social-media-icons-realistic-facebook-app-set-logo-vector-zaporizhzhia-ukraine-may-facebook-222305322.jpg" />
                                <img onClick={getOtp} className="gmail_logo" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png" />
                            </FormControl>
                            <p className="image_divide_or">Or</p>
                            <FormControl>
                                <FormLabel fontSize="large">Enter Email</FormLabel>
                                <Input ref={email} type="email" placeholder="Enter Email" variant="flushed" />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <div>
                                <button className="login_btn" onClick={() => {
                                    handleLogin();
                                }}>
                                    Log In
                                </button>
                                <button onClick={onClose} className="login_close">Cancel</button>
                            </div>
                        </ModalFooter>
                        {flag2 ? <h2 className="account_create_class">Account does not exist <Signup value={{ func: getOtp, email: email.current.value }} /> </h2> : <div className="account_create_class"></div>}
                    </ModalContent>
                </Modal> :
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent pb={10} pt={10}>
                        <ModalHeader fontSize="3xl">Sign In with OTP</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Enter OTP</FormLabel>
                                <PinInput otp>
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                </PinInput>
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <button className="otp_btn" colorScheme='blue' mr={3} onClick={onClose}>
                                START SHOPPING
                            </button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            }
        </div >
    )
}

export default Login
