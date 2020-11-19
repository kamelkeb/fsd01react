import React from "react";
import styles from "./HomePage.module.css";
import Header from "../Components/Header/Header";
import { IonPage } from "@ionic/react";
import SideBar from "../Components/SideBar/SideBar";

function HomePage({ name, password }) {
  return (
    <IonPage>
      <Header name={name} password={password}></Header>
      <SideBar></SideBar>
      <p>
        Ceci est une app d'illustration des concepts React, choisisser un item
        dans le menu pour plus de contenu.
      </p>
    </IonPage>
  );
}

export default HomePage;
