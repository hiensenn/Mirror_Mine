import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh6jPKey3mmkTKkw5Nk3_zjdLGLySicFk",
  authDomain: "mirror-mine.firebaseapp.com",
  projectId: "mirror-mine",
  storageBucket: "mirror-mine.firebasestorage.app",
  messagingSenderId: "581231375971",
  appId: "1:581231375971:web:2b77fc34bfa19f0a5dea56",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
