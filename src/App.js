import React, { useState } from "react";
import "./App.css";

import ExoCompteur from "./Components/ExoCompteur/ExoCompteur";
import { Wrapper } from "./HOC/Wrapper";
import ExoCouleur from "./Components/ExoCouleur/ExoCouleur";
import ExoLogin from "./Components/ExoLogin/ExoLogin";

export const App = () => {
  const [name, setName] = useState("");
  return (
    <Wrapper className="App">
      <header className="App-header"></header>
      <div className="main-contener">
        <div className="sidebar"></div>
        <div className="main-column">
          <ExoLogin></ExoLogin>

          <ExoCompteur initialValue={0} incrValue={+1} decrValue={-1} />
          <ExoCompteur initialValue={10} incrValue={+10} decrValue={-10} />
          <ExoCouleur></ExoCouleur>
        </div>
      </div>
    </Wrapper>
  );
};
