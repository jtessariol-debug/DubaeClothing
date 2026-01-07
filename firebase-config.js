
// Importar funciones SDK desde CDN (Compatible con Vite/ESM directos)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    query, 
    where, 
    updateDoc, 
    deleteDoc, 
    doc, 
    orderBy, 
    serverTimestamp,
    onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- CONFIGURACIÓN DE FIREBASE ---
// REEMPLAZAR CON TUS DATOS DE FIREBASE CONSOLE
const firebaseConfig = {
  apiKey: "TU_API_KEY_AQUI",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

// Inicialización
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// Lista de correos con permisos de Admin (para moderación)
const ADMIN_EMAILS = [
    "admin@dubae.com", 
    "tu-email@gmail.com"
];

export { 
    auth, 
    db, 
    provider, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged, 
    collection, 
    addDoc, 
    getDocs, 
    query, 
    where, 
    updateDoc, 
    deleteDoc, 
    doc, 
    orderBy, 
    serverTimestamp,
    onSnapshot,
    ADMIN_EMAILS 
};
