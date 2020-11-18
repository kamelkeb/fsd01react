import React, { useState } from "react";
import "./App.css";
import settingsIcon from "./assets/settings.svg";
import hamburgerIcon from "./assets/reorder-three-outline.svg";
import ExoCompteur from "./Components/ExoCompteur/ExoCompteur";
import { Wrapper } from "./HOC/Wrapper";
import ExoCouleur from "./Components/ExoCouleur/ExoCouleur";
import ExoLogin from "./Components/ExoLogin/ExoLogin";

export const App = () => {
  const [name, setName] = useState("");
  const loginHandler = (name) => {
    setName(name);
    // d'autres traitements en cas de login
  };

  return (
    <Wrapper className="App">
      <header className="App-header">
        <img src={hamburgerIcon} className="hamburger-icon" alt="menu" />
        {name ? <h2>Login réussi, bonjour {name}!</h2> : null}
        <img src={settingsIcon} className="settings-icon" alt="settings" />
      </header>
      <div className="main-container">
        <div className="sidebar"></div>
        <div className="main-column">
          <ExoLogin sendBackData={loginHandler}></ExoLogin>
          <ExoCompteur initialValue={0} incrValue={+1} decrValue={-1} />
          <ExoCompteur initialValue={10} incrValue={+10} decrValue={-10} />
          <ExoCouleur></ExoCouleur>
        </div>
      </div>
    </Wrapper>
  );
};
