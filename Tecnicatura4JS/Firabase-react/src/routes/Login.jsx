import { useContext, useState } from "react"; // Importa la funcion "useContext" de la biblioteca React para acceder aun contexto.
import { UserContext } from "../context/UserProvider"; // Importa el contexto "UserContext" desde el arhicov "UserProvider.js"
import { useNavigate } from "react-router-dom"; // Importa la función "useNavigate" de React Router para la navegación

const Login = () => {
  const [email, setEmail] = useState(""); //Inciializa con una cadena vacía
  const [password, setPassword] = useState(""); ///Inicializa con una cadena vacia
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      console.log("Usuario logueado");
      navigate("/");
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <>
      <h1>Login</h1>
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
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
