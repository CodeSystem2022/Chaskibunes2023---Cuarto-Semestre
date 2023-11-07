import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCz6GPxajPSDipnQ69E8ItPVxmxjvo0F9Q",
  authDomain: "firabase-react-e24d4.firebaseapp.com",
  projectId: "firabase-react-e24d4",
  storageBucket: "firabase-react-e24d4.appspot.com",
  messagingSenderId: "841451995492",
  appId: "1:841451995492:web:b7e8242837e975630f3a71",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
