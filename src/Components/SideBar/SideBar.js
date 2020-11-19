import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <ul>
        <NavLink to="/compteur/1">
          <li className={styles.menuEntry}>Exemple basique n°1: Compteur</li>
        </NavLink>
        <NavLink to="/couleurs">
          <li className={styles.menuEntry}>
            Exemple basique n°2: Génération de carrés colorés
          </li>
        </NavLink>
        <NavLink to="/login">
          <li className={styles.menuEntry}>Login (accès à contenu privé)</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default SideBar;
