import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHB6VZErTU-D6y_BCN84oGAjdyCu2NH9s",
  authDomain: "archives-marketplace.firebaseapp.com",
  projectId: "archives-marketplace",
  storageBucket: "archives-marketplace.appspot.com",
  messagingSenderId: "654454385987",
  appId: "1:654454385987:web:9709d9e39d60d84e9093f6",
  measurementId: "G-SXG1EQP25Z"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);