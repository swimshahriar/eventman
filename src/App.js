import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import NavBar from "./components/NavBar/NavBar";

// pacges
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route to="/" exact>
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
