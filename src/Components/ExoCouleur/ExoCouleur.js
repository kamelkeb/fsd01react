import React, { useState } from "react";
import styles from "./ExoCouleur.module.css";
import { IonButton } from "@ionic/react";

function ExoCouleur() {
  const [colors, setColor] = useState([]);
  const genHexColor = () => "#" + Math.random().toString(16).substr(-6);
  const addColor = (hexValue) => {
    setColor((table) => [...table, hexValue]);
  };

  return (
    <div className={styles.ExoCompteur}>
      <IonButton color="tertiary" onClick={() => addColor(genHexColor())}>
        Add color
      </IonButton>
      {colors.map((m) => (
        <div
          style={{ width: "100px", height: "100px", backgroundColor: m }}
        ></div>
      ))}
    </div>
  );
}

export default ExoCouleur;
