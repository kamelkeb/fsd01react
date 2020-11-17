import React, { useState } from "react";
import styles from "./ExoCompteur.module.css";

function ExoCompteur({ initialValue, incrValue, decrValue }) {
  const [compteur, setCompteur] = useState(initialValue);
  const compteurChangeHandler = (inc) => {
    setCompteur((compteur) => compteur + inc);
  };
  return (
    <div className={styles.ExoCompteur}>
      <button onClick={() => compteurChangeHandler(incrValue)}>
        Incrémenter de {incrValue}
      </button>
      <button onClick={() => compteurChangeHandler(decrValue)}>
        Décrémenter de {decrValue}
      </button>
      <p>Le compteur est à: {compteur}</p>
    </div>
  );
}

export default ExoCompteur;
