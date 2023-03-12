import './../styles/styles.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz-schzsSeoer3tFdieQIAbt6UpQ1S0KQ",
  authDomain: "moj121frontpol.firebaseapp.com",
  projectId: "moj121frontpol",
  storageBucket: "moj121frontpol.appspot.com",
  messagingSenderId: "127781220621",
  appId: "1:127781220621:web:2bb4d7b5a19af12e5f8044"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);



const url = "https://firebasestorage.googleapis.com/v0/b/moj121frontpol.appspot.com/o/IMG_20201122_101754.jpg?alt=media&token=6cf101bc-283b-4815-a7c2-1cddf9d7c995"

const obrazek = document.createElement("img");
obrazek.setAttribute("src", url);  //img.src =
document.body.appendChild(obrazek);

const link = "https://reqres.in/api/users?page=2"
fetch(link)
.then((daneZPromisa) => daneZPromisa.json())
.then((danezJSON) => console.log(danezJSON.data));