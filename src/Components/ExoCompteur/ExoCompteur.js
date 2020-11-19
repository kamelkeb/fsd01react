import React, { useState } from "react";
import styles from "./ExoCompteur.module.css";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { IonPage } from "@ionic/react";

function ExoCompteur({ initialValue, loggedIn }) {
  const [compteur, setCompteur] = useState(initialValue);
  const [newDelta, setNewDelta] = useState(0);

  const { deltaParam } = useParams();
  const delta = deltaParam;
  const history = useHistory();

  // autre façon de protéger du contenu
  if (!loggedIn) {
    return <Redirect to="/login" />;
  }
  const compteurChangeHandler = (inc) => {
    setCompteur((compt) => compt + inc);
  };

  const changeDeltaHandler = (newDelta) => {
    history.push(`/compteur/${newDelta}`);
  };
  return (
    <IonPage className={styles.ExoCompteur}>
      <button onClick={() => compteurChangeHandler(+delta)}>
        Incrémenter de {delta}
      </button>
      <button onClick={() => compteurChangeHandler(-delta)}>
        Décrémenter de {delta}
      </button>
      <p>Le compteur est à: {compteur}</p>
      <label>Voulez vous choisir un delta d'incrémentation différent?</label>
      <br />
      <input
        value={newDelta}
        onChange={(e) => {
          setNewDelta(e.target.value);
        }}
      ></input>
      <button onClick={() => changeDeltaHandler(newDelta)}>Valider</button>
    </IonPage>
  );
}

export default ExoCompteur;
