import './../styles/styles.css';

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXJWy6s_1p1qdH7qDvwUdo4wNZBMg1ASA",
  authDomain: "naukamoja-50dd4.firebaseapp.com",
  projectId: "naukamoja-50dd4",
  storageBucket: "naukamoja-50dd4.appspot.com",
  messagingSenderId: "149285652768",
  appId: "1:149285652768:web:a14fd357e02ddc9e08ef45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage
const storage = getStorage(app);

const url = "https://firebasestorage.googleapis.com/v0/b/naukamoja-50dd4.appspot.com/o/1.jpg?alt=media&token=01267ef1-a84d-4c62-995d-1a53f27aa0af";

const obrazek = document.createElement("img");
// obrazek.src = url; ---to samo co pod spodem tylko skórcona wersja
obrazek.setAttribute("src", url);
document.body.appendChild(obrazek);


// przykład funkcji callback
function myFunction(callback) {
  callback("MÓJ ARGUMENT!");
}

function callback(arg) {
  console.log(arg)
}
myFunction(callback);

// const arrJson = fetch().then((arr) => arr.json());
// arrJson.then((data) => console.log(data));

// async function mojaAynchronicznaFunkcja() {
//   const arr = await fetch();
//   const data = await arr.json();
//   console.log(data)
// }
// mojaAynchronicznaFunkcja();

const adresUrl = 'https://reqres.in/api/users'

fetch(adresUrl)
.then(daneZPromisa => daneZPromisa.json())
.then(daneZJson => console.log(daneZJson.data));

// async function myFunctionAsynchroniczna() {
//   const arg = await fetch(adresUrl);
//   const newdata = await arg.json();
//   console.log(newdata.data);
// }
// myFunctionAsynchroniczna()