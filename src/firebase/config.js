import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAOsgawOXzqp7fpbfRxAB2UfN9slRxke3E",
    authDomain: "tienda-viertual-react.firebaseapp.com",
    projectId: "tienda-viertual-react",
    storageBucket: "tienda-viertual-react.firebasestorage.app",
    messagingSenderId: "241212873542",
    appId: "1:241212873542:web:ee33f4319b7c202e57a347",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la base de datos
export const db = getFirestore(app);
