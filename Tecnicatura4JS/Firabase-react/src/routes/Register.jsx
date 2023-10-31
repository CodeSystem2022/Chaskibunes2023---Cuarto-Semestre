import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Register = () => {
  // Define componentes de estado para email y password y sus funciones para actualizarlos
  const [email, setEmail] = useState(""); // Inicializa con una cadena vacía
  const [password, setPassword] = useState(""); // Inicializa con una cadena vacía

  const navigate = useNavigate(); // obtiene la función de navegación desde react-router-dom

  // Obtiene la función "registerUser" desde el contexto UserContext utilizando el hook useContext
  const { userRegister } = useContext(UserContext);

  // Maneja el envío del formulario cuando el usuario presiona el botón "Register"
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario

    console.log("Procesando form: ", email, password);

    try {
      // Llama a la función "registerUser" para registrar al usuario con el email y contraseña proporcionados.
      await userRegister(email, password);
      console.log("Usuario Creado");
      navigate("/"); // Redirige al usuario a la página de inicio (ruta "/") después de registrar exitosamente.
    } catch (error) {
      console.log(error.code); // En caso de error, muestra el código del error en la consola.
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingrese email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingrese Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
