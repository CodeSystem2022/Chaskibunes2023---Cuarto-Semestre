import { Routes, Route } from "react-router-dom"; //Importa los componentes necesarios de React Router para definir las rutas en la aplicación.

import Login from "./routes/Login";
import Register from "./routes/Register";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <>
      <Navbar />
      {/* Renderiza el componente "Navbar", que probablemente representa la barra de navegación de la aplicación. */}
      <h1>APP</h1>
      {/* Renderiza el titulo o encabezado en la pagina. */}
      <Routes>
        {/* Define un conjunto de rutas utilizando el componente "Routes" de React Router */}
        {/* Definición de una ruta */}
        <Route
          path="/"
          element={
            <RequireAuth>
              {/* Envuelve el componente "Home" con "RequireAuth". Puede utilziarse para requerir autetncación antes de mostrar la pagina home */}
              <Home />
              {/* Renderiza el componente "Home cuando la ruta coincide con "/" */}
            </RequireAuth>
          }
        />
        {/* Definición de otra ruta */}
        <Route path="/login" element={<Login />} />
        {/*Define la ruta "/login" y renderiza el componente "Login" cuando la ruta coincide.*/}
        <Route path="/register" element={<Register />} />
        {/*Define la ruta "/register" y renderiza el componente "Register" cuando la ruta coincide.*/}
      </Routes>
    </>
  );
}

export default App;
