import React, { createContext, useState, useEffect } from "react";

// firebase
import { fbAuth } from "../firebase";

export const globalState = createContext({
  user: null,
  loading: true,
  login: () => {},
  register: () => {},
  logout: () => {},
});

const GlobalStateProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginHandler = (email, pass) => {
    return fbAuth.signInWithEmailAndPassword(email, pass).then((res) => {
      setUser(res.user);

      return res.user;
    });
  };

  const registerHandler = (email, pass) => {
    return fbAuth.createUserWithEmailAndPassword(email, pass).then((res) => {
      setUser(res.user);
      return res.user;
    });
  };

  const logoutHandler = () => {
    fbAuth.signOut().then(() => setUser(null));
  };

  useEffect(() => {
    const unsubscribe = fbAuth.onAuthStateChanged((user) => {
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
