import React, { createContext, useState, useEffect } from "react";

// firebase
import firebase from "../firebase";

export const globalState = createContext({
  user: null,
  loading: true,
  login: () => {},
  register: () => {},
  logout: () => {},
});

const GlobalStateProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginHandler = (email, pass) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then((res) => {
        setUser(setUser(res.user));

        return res.user;
      });
  };

  const registerHandler = (email, pass) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then((res) => {
        setUser(setUser(res.user));
        return res.user;
      });
  };

  const logoutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => setUser(null));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <globalState.Provider
      value={{
        user: user,
        loading: loading,
        login: loginHandler,
        register: registerHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </globalState.Provider>
  );
};

export default GlobalStateProvider;
