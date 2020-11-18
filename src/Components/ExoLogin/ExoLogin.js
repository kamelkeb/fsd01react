import React, { useState } from "react";
import styles from "./ExoLogin.module.css";

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
    <div className={styles.ExoLogin}>
      <label>Nom</label>
      <br />
      <input value={name} onChange={(e) => setName(e.target.value)}></input>

      <br />
      <label>Mot de passe</label>
      <br />
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />
      {errPasswordLength ? (
        <label>Le mot de passe doit comporter au moins 6 caractères</label>
      ) : null}
      <br />
      <button onClick={checkInputValuesAndSendData}>Login</button>
    </div>
  );
}

export default ExoLogin;
