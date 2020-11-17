import React, { useState } from "react";
import styles from "./ExoCouleur.module.css";

function ExoCouleur() {
  const [colors, setColor] = useState([]);
  const genHexColor = () => "#" + Math.random().toString(16).substr(-6);
  const addColor = (hexValue) => {
    setColor((table) => [...table, hexValue]);
  };

  return (
    <div className={styles.ExoCompteur}>
      <button
        style={{ width: "200px", height: "100px", marginRight: "50px" }}
        onClick={() => addColor(genHexColor())}
      >
        Add color
      </button>
      {colors.map((m) => (
        <div
          style={{ width: "100px", height: "100px", backgroundColor: m }}
        ></div>
      ))}
    </div>
  );
}

export default ExoCouleur;
