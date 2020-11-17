import React, { useState } from "react";
import styles from "./ExoCouleur.module.css";

function ExoCouleur() {
  const [couleurs, setCouleur] = useState([]);
  const rgbColor = "#F0F000";

  const clickHandled = () => {
    setCouleur((tab) => [...tab, rgbColor]);
    console.log(couleurs);
  };
  return (
    <div className={styles.ExoCompteur}>
      <button onClick={clickHandled}>Générer couleur</button>
      <div
        style={{ width: "40px", height: "40px", backgroundColor: "#F0F000" }}
      ></div>
    </div>
  );
}

export default ExoCouleur;
