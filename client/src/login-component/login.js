import React, { useContext, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Box,
} from "@chakra-ui/react";
import Signup from "./signup";
import "../login.css";
import { Link } from "react-router-dom";
import { login } from "../api/login";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = localStorage.getItem("token");

  const [errmsg, setErrmsg] = useState("");
  const loginHandler = () => {
    login(email, password)
      .then((res) => {
        localStorage.setItem("token", res.data.data);
        setIsAuth(true);
        onClose();
      })
      .catch((err) => {
        setErrmsg(err.response.data.message);
      });
  };
  return (
    <div>
      {token ? (
        <Text
          onClick={() => {
            localStorage.removeItem("token");
            setIsAuth(false);
          }}
        >
          LogOut
        </Text>
      ) : (
        <Text onClick={onOpen}>logIn</Text>
      )}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="4xl" pt="16">
            Welcome to AJIO
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel fontSize="xl">Join / Sign In using</FormLabel>

              <img
                alt=""
                className="facebook_logo"
                src="https://thumbs.dreamstime.com/b/facebook-background-facebook-icon-social-media-icons-realistic-facebook-app-set-logo-vector-zaporizhzhia-ukraine-may-facebook-222305322.jpg"
              />
              <img
                alt=""
                className="gmail_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png"
              />
            </FormControl>
            <p className="image_divide_or">Or</p>
            <FormControl>
              <FormLabel fontSize="large"> Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter Email"
                variant="flushed"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl mt="20px">
              <FormLabel fontSize="large"> Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter Password"
                variant="flushed"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <Text ml={5} fontSize="16px" color="red">
            {errmsg}
          </Text>
          <ModalFooter>
            <div>
              <button className="login_btn" onClick={loginHandler}>
                Log In
              </button>
              <button onClick={onClose} className="login_close">
                Cancel
              </button>
            </div>
          </ModalFooter>
          <Box display="flex">
            <Text ml={2} mr="2px" mt="2px">
              Account does not exist
            </Text>
            <Text fontSize="18px" fontWeight={600} cursor="pointer">
              <Signup />
            </Text>
          </Box>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Login;
