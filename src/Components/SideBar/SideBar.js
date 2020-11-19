import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";
import {
  IonSplitPane,
  IonContent,
  IonMenu,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonPage,
  IonList,
  IonButton,
  IonItem,
} from "@ionic/react";

function SideBar() {
  return (
    <IonMenu contentId="idMenu1" side="start" menuId="first">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sommaire</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <NavLink to="/compteur/1">
          <IonButton fill="clear">Compteur</IonButton>
        </NavLink>

        <NavLink to="/couleurs">
          <IonButton fill="clear">Génération de carrés colorés</IonButton>
        </NavLink>
      </IonContent>
    </IonMenu>
  );
}

export default SideBar;
