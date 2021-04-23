import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

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

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  let routes = (
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
  }

  return (
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
