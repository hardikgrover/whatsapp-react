// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAxQi6BmmxFypreC7ihRm_vKJ9f01xfERg",
  authDomain: "whatsapp-mern-edef1.firebaseapp.com",
  projectId: "whatsapp-mern-edef1",
  storageBucket: "whatsapp-mern-edef1.appspot.com",
  messagingSenderId: "947398968324",
  appId: "1:947398968324:web:44d3c3e3cfaad473ed6151",
  measurementId: "G-EP86RSDCWE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
