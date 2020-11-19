import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import settingsIcon from "./assets/settings.svg";
import hamburgerIcon from "./assets/reorder-three-outline.svg";
import ExoCompteur from "./Components/ExoCompteur/ExoCompteur";

import ExoCouleur from "./Components/ExoCouleur/ExoCouleur";
import ExoLogin from "./Components/ExoLogin/ExoLogin";
import SideBar from "./Components/SideBar/SideBar";

import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet } from "@ionic/react";

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
    <BrowserRouter className="App">
      <header className="App-header">
        <img src={hamburgerIcon} className="hamburger-icon" alt="menu" />
        {name && password ? <h2>Login réussi, bonjour {name}!</h2> : null}
        <img src={settingsIcon} className="settings-icon" alt="settings" />
      </header>

      <div className="main-container">
        <SideBar></SideBar>
        <div className="main-column">
          <Switch>
            <Route exact path="/">
              <p>
                Ceci est une app d'illustration des concepts React, choisisser
                un item dans le menu pour plus de contenu.
              </p>
            </Route>
            <Route path="/login">
              <ExoLogin sendBackData={loginHandler}></ExoLogin>
            </Route>
            <Route path="/compteur/:deltaParam" render={computeMyComp}></Route>

            <Route path="/couleurs">
              {loggedIn ? <ExoCouleur /> : <Redirect to="/login" />}
            </Route>
            <Route path="*">
              <Redirect to="/"></Redirect>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
