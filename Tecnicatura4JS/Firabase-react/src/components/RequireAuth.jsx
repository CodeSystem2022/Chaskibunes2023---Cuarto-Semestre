import { useContext } from "react"; // Importa la función "useContext" de la biblioteca React para acceder a un contexto
import { UserContext } from "../context/UserProvider"; // Importa el contexto "UserContext" desde el arhicov "UserProvider.js"
import { Navigate } from "react-router-dom"; // Importa el componente "Navigate" de React Router Para la navegación

const RequireAuth = ({ children }) => {
  const { user } = useContext(UserContext); // Utiliza "useContext" para acceder al contexto "UserContext" y obtener el estado del usuario.

  if (!user) {
    // Verifica si el usuario no esta autenticado
    return <Navigate to="/login" />; // Si el usuario no esta autenticado, redirige a la pagina de inicio de sesion ("/login") utilizando el componente
  }
  return children; // Si el usuario está autenticado, rederiza los componentes hijos pasados como "children"
};

export default RequireAuth; // Exporta el componente "RequireAuth" como el componente principal del módulo
