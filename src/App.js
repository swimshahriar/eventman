import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Spinner, Heading } from "@chakra-ui/react";

// components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// pacges
import Home from "./pages/Home";
import Auth from "./pages/Auth/Auth";
import Services from "./pages/Services";
import UserDashboard from "./pages/UserDashboard";

// global state
import { globalState } from "./state/globalState";

const App = () => {
  const { user, loading } = useContext(globalState);

  let routes;

  if (user) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/user-dashboard">
          <UserDashboard />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return loading ? (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div style={{ textAlign: "center" }}>
        <Spinner size="xl" color="primary" />
        <Heading as="h1" style={{ marginTop: "1rem" }}>
          Loading...
        </Heading>
      </div>
    </div>
  ) : (
    <>
      <header>
        <NavBar />
      </header>
      <main>{routes}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
