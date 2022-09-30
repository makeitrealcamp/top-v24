import { useState, useEffect } from "react";
import axios from "axios";

const Private = () => {
  return <h1>Ruta privada, bienvenido {localStorage.getItem("email")}</h1>;
};

export default Private;
