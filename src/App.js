import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';

function App() {
  return (
    <Router>
      {" "}
      {/* higher order component */}
      <div className="app">
        <Switch>
          <Route path="/checkout/">
            <Header />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          {/* This is the default route */}
          <Route path="/">
            <Header />
            <h1>Home page!!!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

   {
     /* React-Router */
   }

   {
     /* localhost.com/ */
   }
   {
     /* localhost.com/checkout */
   }
   {
     /* localhost.com/login */
   }
      


export default App;
