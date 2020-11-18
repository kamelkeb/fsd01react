import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./App.css";
import settingsIcon from "./assets/settings.svg";
import hamburgerIcon from "./assets/reorder-three-outline.svg";
import ExoCompteur from "./Components/ExoCompteur/ExoCompteur";
import { Wrapper } from "./HOC/Wrapper";
import ExoCouleur from "./Components/ExoCouleur/ExoCouleur";
import ExoLogin from "./Components/ExoLogin/ExoLogin";

export const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = ({ name, password }) => {
    setName(name);
    setPassword(password);
    // d'autres traitements en cas de login
  };

  return (
    <BrowserRouter className="App">
      <header className="App-header">
        <img src={hamburgerIcon} className="hamburger-icon" alt="menu" />
        {name && password ? <h2>Login réussi, bonjour {name}!</h2> : null}
        <img src={settingsIcon} className="settings-icon" alt="settings" />
      </header>

      <div className="main-container">
        <div className="sidebar">
          <ul>
            <li className="menu-entry">Login (accès à contenu privé)</li>
            <li className="menu-entry">Usage de state 1</li>
            <li className="menu-entry">Usage de state 2</li>
            <li className="menu-entry">Génération de divs</li>
          </ul>
        </div>
        <div className="main-column">
          <ExoLogin sendBackData={loginHandler}></ExoLogin>
          <Route path="/compteur1">
            <ExoCompteur initialValue={0} incrValue={+1} decrValue={-1} />
          </Route>

          <ExoCompteur initialValue={10} incrValue={+10} decrValue={-10} />
          <ExoCouleur></ExoCouleur>
        </div>
      </div>
    </BrowserRouter>
  );
};
