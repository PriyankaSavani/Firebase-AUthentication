import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-kNNp0FtTann987Lhug9TBA24YGOK9MY",
  authDomain: "react-authentication-2d5a1.firebaseapp.com",
  projectId: "react-authentication-2d5a1",
  storageBucket: "react-authentication-2d5a1.appspot.com",
  messagingSenderId: "1691880233",
  appId: "1:1691880233:web:d93db262d1103921f04538",
  measurementId: "G-00TLVCE78J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app