
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4eL3kTjsm1GA8rWhstX6VsNPoI5MI9-E",
  authDomain: "flixflex-961f9.firebaseapp.com",
  projectId: "flixflex-961f9",
  storageBucket: "flixflex-961f9.appspot.com",
  messagingSenderId: "622473796731",
  appId: "1:622473796731:web:be5e6a70ae5103761156de",
};

const firebaseApp: any = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const firebaseAuth: any = getAuth(firebaseApp);
