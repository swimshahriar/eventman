import React, { useState, useContext } from "react";
import {
  Heading,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

// global state
import { globalState } from "../../state/globalState";

// styles
import "./Auth.css";
import { firestore } from "../../firebase";

const Auth = () => {
  const { login, register } = useContext(globalState);
  const [accountInfo, setAccountInfo] = useState({ email: "", pass: "" });
  const [show, setShow] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handleClick = () => setShow(!show);

  const { email, pass } = accountInfo;
  const loginHandler = () => {
    setError("");
    if (email === "" || pass === "") {
      setError("Fill the form");
      return;
    }

    setIsLoading(true);
    login(email, pass)
      .then((user) => {
        setAccountInfo({ email: "", pass: "" });
        setIsLoading(false);
        if (user.email === "admin@eventman.com") {
          history.push("/admin");
        } else {
          history.push("/user-dashboard");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  const registerHandler = () => {
    setError("");
    if (email === "" || pass === "") {
      setError("Fill the form");
      return;
    }
    setIsLoading(true);
    register(email, pass)
      .then((user) => {
        setAccountInfo({ email: "", pass: "" });
        setIsLoading(false);
        firestore.collection(`messages-${user.uid}`).add({
          userId: user.uid,
          message: "Chat channel created!",
          createdAt: new Date(),
        });
        firestore.collection("messages-groups").add({
          userId: user.uid,
          groupId: `messages-${user.uid}`,
          email: user.email,
          createdAt: new Date(),
        });
        history.push("/user-dashboard");
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  return (
    <div className="auth globalPadding">
      <Heading as="h2" textAlign="center" className="auth__heading">
        Authentication
      </Heading>

      <form className="auth__form">
        {error && <p className="auth__form_error">{error}</p>}
        {isLoading && <p className="auth__form_error">Loading...</p>}
        <Input
          placeholder="Email"
          size="lg"
          className="auth__form_input"
          value={accountInfo.email}
          onChange={(e) =>
            setAccountInfo({ ...accountInfo, email: e.target.value })
          }
          required
          type="email"
        />
        <InputGroup size="lg" className="auth__form_input">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            value={accountInfo.pass}
            onChange={(e) =>
              setAccountInfo({ ...accountInfo, pass: e.target.value })
            }
            required
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        {isLoginMode ? (
          <Button size="md" className="hero__left-btn" onClick={loginHandler}>
            Login
          </Button>
        ) : (
          <Button
            size="md"
            className="hero__left-btn"
            onClick={registerHandler}
          >
            Register
          </Button>
        )}

        {isLoginMode ? (
          <div>
            <p className="auth__bottom_text">Don't have an account?</p>
            <Button onClick={() => setIsLoginMode(false)}>Register</Button>
          </div>
        ) : (
          <div>
            <p className="auth__bottom_text">Already have an account?</p>
            <Button onClick={() => setIsLoginMode(true)}>Login</Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Auth;
