import React, { useState } from "react";
import styles from "./ExoLogin.module.css";

function ExoLogin(arr) {
  const [name, setName] = useState("");

  return (
    <div className={styles.ExoLogin}>
      <label>Nom</label>
      <br />
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <p>Bonjour {name}</p>
      <button>Login</button>
    </div>
  );
}

export default ExoLogin;
