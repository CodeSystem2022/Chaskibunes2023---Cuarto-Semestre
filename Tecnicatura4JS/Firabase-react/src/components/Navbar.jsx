import { useContext } from "react"; //Importa la función "useContext" de la biblioteca React para acceder a un contexto 
import { NavLink } from "react-router-dom"; // Importa el "NavLink" de React router para la nevegación. 
import { UserContext } from "../context/UserProvider"; // Importa el contexto "Usercontext" desde el archivo "UserProvider.js". 
 
const Navbar = () => { 
  const { user, signOutUser } = useContext(UserContext); //Utiliza "useContext" para acceder a "UserContext"  obtener el estado del usuario 
 
  const handleClickLogout = async () => { 
    try { 
      await signOutUser(); // LLama a la función "signOutUser" para cerrar la sesión del usuario. 
      console.log("usuario deslogueado"); 
    } catch (error) { 
      console.log(error.code); 
    } 
  }; 
  return ( 
    <div> 
      {user ? ( 
        //Renderiza contenido condicional en función del estado del usuario. 
        <> 
          {/* Muestra un enlace "Inicio" que redirije a la pagina principal */} 
          <NavLink to="/">Inicio</NavLink>  
          {/* Muestra un botón "Logout" que, al hacer clic, llama a la función "setUser" para cerrar sesión */} 
          <button onClick={handleClickLogout}>Logout</button> 
        </> 
      ) : ( 
        <> 
          {/* Si el usuario no está autenticado, muestral un enlace "Login" que redirige a la pagina de inicio de sesion */} 
          <NavLink to="/login">Login</NavLink> 
          <NavLink to="/register">Register</NavLink> 
        </> 
      )} 
    </div> 
  ); 
}; 
 
export default Navbar; 
