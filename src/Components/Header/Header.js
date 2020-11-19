import React from "react";

import { menuOutline, settingsOutline } from "ionicons/icons";
import styles from "./Header.module.css";

import {
  IonHeader,
  IonToolbar,
  IonMenuButton,
  IonButton,
  IonTitle,
  IonIcon,
} from "@ionic/react";

function Header({ name, password }) {
  return (
    <IonHeader>
      <IonToolbar>
        <IonMenuButton slot="start" fill="clear" autohide id="idMenu1">
          <IonIcon icon={menuOutline}></IonIcon>
        </IonMenuButton>

        {name && password ? (
          <IonTitle slot="end">Login réussi, bonjour {name}!</IonTitle>
        ) : null}

        <IonButton slot="end" fill="clear">
          <IonIcon icon={settingsOutline}></IonIcon>
        </IonButton>
      </IonToolbar>
    </IonHeader>
  );
}

export default Header;
