// Importa la biblioteca React y la funcioón createRoot.
import React from "react";
import { createRoot } from "react-dom/client";

// Importa la hoja de estilo css llamada "index.css".
import "./index.css";

// Importa el componente principal de la aplicación desde el "app.js".
import App from "./App.jsx";

// Importa el componente "BrowserRouter" de ReactRouter, que permite la navegación en la aplicación.
import { BrowserRouter } from "react-router-dom";

// Importa un componente personalizado "UserProvider" de un contexto definido en el proyecto.
import UserProvider from "./context/UserProvider";

// Crea una instancia de createRoot para renderizar la aplicación en el elemento "root".
const rootElement = createRoot(root);

rootElement.render(
  <BrowserRouter>
    {/* Envuelve la aplicación con el componente UserProvider para proporcionar información de usuario */}
    <UserProvider>
      {/* Dentro del BrowserRouter, define el componente principal de la aplicación */}
      <App />
    </UserProvider>
  </BrowserRouter>
);
