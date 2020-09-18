import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotMatch from './components/NotMatch/NotMatch';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Room from './components/Room/Room';
import "leaflet/dist/leaflet.css";

export const travelSpotcontext = createContext();

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [travelSpot, setTravelSpot] = useState({});
  return (
    <travelSpotcontext.Provider value={[travelSpot, setTravelSpot]}>
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/booking">
              <Booking></Booking>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/room">
              <Room></Room>
            </PrivateRoute>
            <Route path="*">
              <NotMatch></NotMatch>
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </travelSpotcontext.Provider>
  );
}

export default App;
