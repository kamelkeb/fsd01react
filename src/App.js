import React, { useState } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import "./App.css";
import ExoCompteur from "./Components/ExoCompteur/ExoCompteur";

import ExoCouleur from "./Components/ExoCouleur/ExoCouleur";
import ExoLogin from "./Components/ExoLogin/ExoLogin";
import SideBar from "./Components/SideBar/SideBar";

import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet } from "@ionic/react";
import Header from "./Components/Header/Header";
import HomePage from "./pages/HomePage";

export const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedin] = useState(false);
  const loginHandler = ({ name, password }) => {
    setName(name);
    setPassword(password);
    // d'autres traitements en cas de login
    setLoggedin(true);
  };

  const computeMyComp = () => (
    <ExoCompteur initialValue={0} loggedIn={loggedIn} />
  );

  return (
    <IonReactRouter className="App">
      <IonRouterOutlet>
        <Switch>
          <Route exact path="/">
            <HomePage name={name} password={password}></HomePage>
          </Route>
          <Route path="/login">
            <ExoLogin sendBackData={loginHandler}></ExoLogin>
          </Route>
          <Route path="/compteur/:deltaParam">
            <ExoCompteur initialValue={0} loggedIn={loggedIn} />
          </Route>
          <Route path="/couleurs">
            {loggedIn ? <ExoCouleur /> : <Redirect to="/login" />}
          </Route>
          <Route path="*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};
