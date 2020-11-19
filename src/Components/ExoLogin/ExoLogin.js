import React, { useState } from "react";
import classes from "./ExoLogin.module.css";
import {
  IonPage,
  IonButton,
  IonContent,
  IonLabel,
  IonInput,
  IonItem,
  IonText,
} from "@ionic/react";

import Header from "../Header/Header";

function ExoLogin({ sendBackData }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errPasswordLength, setErrPasswordLength] = useState(false);

  const checkInputValuesAndSendData = () => {
    if (password.length > 5) {
      setErrPasswordLength(false);
      sendBackData({ name, password });
    } else {
      setErrPasswordLength(true);
    }
  };

  return (
    <IonPage className="ion-align-items-center">
      <Header name={name} password={password}></Header>
      <IonContent className={classes.loginFormContainer}>
        <IonItem>
          <IonLabel position="stacked">Nom</IonLabel>
          <IonInput
            value={name}
            onIonChange={(e) => setName(e.detail.value)}
            size
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Mot de passe</IonLabel>
          <IonInput
            value={password}
            type="password"
            onIonChange={(e) => setPassword(e.detail.value)}
          ></IonInput>
        </IonItem>
        {errPasswordLength ? (
          <IonText>
            Le mot de passe doit comporter au moins 6 caractères
          </IonText>
        ) : null}

        <IonButton
          onClick={checkInputValuesAndSendData}
          fill="outline"
          size="small"
        >
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
}

export default ExoLogin;
