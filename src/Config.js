
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOSsAhadx7j8-I3nDvqNRw75-JjVfujgU",
  authDomain: "task-81327.firebaseapp.com",
  projectId: "task-81327",
  storageBucket: "task-81327.appspot.com",
  messagingSenderId: "675368885343",
  appId: "1:675368885343:web:7309227b7b80443d580fea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
