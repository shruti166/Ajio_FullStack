import { ChevronLeftIcon } from "@chakra-ui/icons";
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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { signup } from "../api/login";
import { AuthContext } from "../Context/AuthContext";
import "../login.css";

function Signup(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [isToken, setIsToken] = useState("");
  const [errmsg, setErrmsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const signupHandler = () => {
    signup(name, email, password)
      .then((res) => {
        setSuccessMsg("Accout created successfully");
        onClose();
      })
      .catch((err) => {
        setErrmsg(err.response.data.message);
      });
  };
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
            <button onClick={onClose} className="ChevronLeftIcon_backbtn">
              <ChevronLeftIcon /> Back
            </button>
            <ModalHeader fontSize="4xl" pt="16">
              Welcome to AJIO
            </ModalHeader>
            <p className="account_set_para">Please set up yours account</p>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl mt={7}>
                <FormLabel fontSize="large">Enter Name</FormLabel>
                <Input
                  placeholder="Name"
                  variant="flushed"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl mt={7}>
                <FormLabel fontSize="large">Enter Email</FormLabel>
                <Input
                  placeholder="Email"
                  variant="flushed"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl mt={7}>
                <FormLabel fontSize="large">Enter Password</FormLabel>
                <Input
                  placeholder="Password"
                  type="password"
                  variant="flushed"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            <Text ml={5}>{successMsg}</Text>
            <Text ml={5}>{errmsg}</Text>
            <ModalFooter>
              <button
                className="login_btn"
                onClick={() => {
                  signupHandler();
                }}
              >
                SignUp
              </button>
            </ModalFooter>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Signup;
