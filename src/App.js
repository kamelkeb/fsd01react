import React from "react";
import "./App.css";

import ExoCompteur from "./Components/ExoCompteur/ExoCompteur";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="main-contener">
        <div className="sidebar"></div>
        <div className="main-column">
          <ExoCompteur initialValue={0} incrValue={+1} decrValue={-1} />
          <ExoCompteur initialValue={10} incrValue={+10} decrValue={-10} />
        </div>
      </div>
    </div>
  );
};
