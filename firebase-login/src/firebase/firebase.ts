import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0hd7ZR1n6CvoF8fq8aftcSyDFKKBUaG8",
  authDomain: "fir-login-7319e.firebaseapp.com",
  projectId: "fir-login-7319e",
  storageBucket: "fir-login-7319e.firebasestorage.app",
  messagingSenderId: "31432348624",
  appId: "1:31432348624:web:381b20774db61833309fd5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
