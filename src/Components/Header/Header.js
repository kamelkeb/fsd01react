import React, { useState } from "react";

import { menuOutline, settingsOutline } from "ionicons/icons";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

import {
  IonHeader,
  IonToolbar,
  IonMenuButton,
  IonButton,
  IonTitle,
  IonIcon,
  IonPopover,
} from "@ionic/react";

function Header({ name, password }) {
  const [showPopover, setShowPopover] = useState(false);
  return (
    <IonHeader>
      <IonToolbar>
        <IonMenuButton slot="start" fill="clear" autohide id="idMenu1">
          <IonIcon icon={menuOutline}></IonIcon>
        </IonMenuButton>

        {name && password ? (
          <IonTitle slot="end">Login réussi, bonjour {name}!</IonTitle>
        ) : null}

        <IonButton slot="end" fill="clear" onClick={() => setShowPopover(true)}>
          <IonIcon icon={settingsOutline}></IonIcon>
        </IonButton>
        <IonPopover
          isOpen={showPopover}
          cssClass="my-custom-class"
          onDidDismiss={(e) => setShowPopover(false)}
        >
          <NavLink to="/login">
            <IonButton fill="clear">Login</IonButton>
          </NavLink>
          <NavLink to="/logout">
            <IonButton fill="clear">Logout</IonButton>
          </NavLink>
        </IonPopover>
      </IonToolbar>
    </IonHeader>
  );
}

export default Header;
