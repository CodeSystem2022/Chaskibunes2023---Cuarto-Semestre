import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firabase";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false); // Utiliza "useState" para definir el estado del usuario con un valor inicial

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Este método está pendiente si el usuario está logueado o no
      console.log();
      if (user) {
        const { email, photoURL, displayName, uid } = user;
        setUser({ email, photoURL, displayName, uid });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe(); // Cancela la suscripción cuando el componente se desmonta
  }, []); // Se ejecuta solo una vez al inicio para obtener el usuario usuario que esta activo en el backend, se ejecuta solo una vez al inicio para obtener el usuario

  const userRegister = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password); //Con este metodo logueamos al usuario

  const signOutUser = () => signOut(auth);

  return (
    <UserContext.Provider
      value={{ user, setUser, userRegister, loginUser, signOutUser }}
    >
      {children}
      {/* Envuleve los componentes hijos con el contexto "UserContext.Provider" y proporciona el valor del estado del usuario */}
    </UserContext.Provider>
  );
};

//Agrega la validación de props
UserProvider.propTypes = {
  children: PropTypes.node.isRequired, // valida que se pase 'children' como pro
};

export default UserProvider;
