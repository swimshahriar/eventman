import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

// pacges
import Home from './pages/Home';
import Auth from './pages/Auth'
import Services from './pages/Services';

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/auth">
            <Auth/>
          </Route>
          <Route path="/services">
            <Services/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
