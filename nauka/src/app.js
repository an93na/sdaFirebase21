import './../styles/styles.css';

import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";


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

// const url = "https://firebasestorage.googleapis.com/v0/b/naukamoja-50dd4.appspot.com/o/1.jpg?alt=media&token=01267ef1-a84d-4c62-995d-1a53f27aa0af";

// const obrazek = document.createElement("img");
// // obrazek.src = url; ---to samo co pod spodem tylko skórcona wersja
// obrazek.setAttribute("src", url);
// document.body.appendChild(obrazek);


// // przykład funkcji callback
// function myFunction(callback) {
//   callback("MÓJ ARGUMENT!");
// }

// function callback(arg) {
//   console.log(arg)
// }
// myFunction(callback);

// const arrJson = fetch().then((arr) => arr.json());
// arrJson.then((data) => console.log(data));

// async function mojaAynchronicznaFunkcja() {
//   const arr = await fetch();
//   const data = await arr.json();
//   console.log(data)
// }
// mojaAynchronicznaFunkcja();

// const adresUrl = 'https://reqres.in/api/users'

// fetch(adresUrl)
// .then(daneZPromisa => daneZPromisa.json())
// .then(daneZJson => console.log(daneZJson.data));

// async function myFunctionAsynchroniczna() {
//   const arg = await fetch(adresUrl);
//   const newdata = await arg.json();
//   console.log(newdata.data);
// }
// myFunctionAsynchroniczna()

//Zapisywanie pliku
// const inputFile = document.createElement('input');
// const inputTekst = document.createElement('input');
// const button = document.createElement('button');
// const header = document.createElement ('h1');

// inputFile.setAttribute('type', 'file');
// inputFile.setAttribute('id', 'myFile');

// inputTekst.setAttribute('type', 'text');
// inputTekst.setAttribute('id', 'myFileText');

// button.setAttribute('id', 'myButton');
// button.innerText = "Kliknij Proszę :)";
// header.setAttribute('id', 'myHeader');

// document.body.appendChild(inputFile);
// document.body.appendChild(inputTekst);
// document.body.appendChild(button);
// document.body.appendChild(header);


// const headerInfo = document.getElementById("myHeader")
// const tekstInput = document.getElementById('myFileText')
// document.getElementById('myButton').addEventListener('click', () => {
// const file = document.getElementById("myFile").files[0];

// let fileName = file.name

// if(tekstInput.value){
//   fileName = tekstInput.value;
// }
// const imageRef = ref(storage, fileName);

// headerInfo.innerText = "Przesyłam ..."

// uploadBytes(imageRef, file).then(() => {
// console.log("Sukces!");

// headerInfo.innerText = "Przesłano!"

//   getDownloadURL(imageRef).then(url => {
//     img.src = url;
//     img.style.width = '200px'
//     // img.style.height = '120px'
//     document.body.appendChild(img);
    
//  })
//  })
// });


// const inputFileDodaj = document.createElement('input');
// const buttonDodaj = document.createElement('button');
// const img = document.createElement("img");

// inputFileDodaj.setAttribute('type', 'text');
// inputFileDodaj.setAttribute('id', 'inputDodaj');
// buttonDodaj.setAttribute('id', 'buttonDodaj');
// buttonDodaj.innerText= 'pobierz zdjęcie';

// document.body.appendChild(inputFileDodaj);
// document.body.appendChild(buttonDodaj);


// const poleTekst = document.getElementById('inputDodaj');

// document.getElementById('buttonDodaj').addEventListener('click', () => {
//   const imageRef = ref(storage,poleTekst.value);

//   headerInfo.innerText = "";
  
//   getDownloadURL(imageRef).then(url => {
//     img.src = url;
//     img.style.width = '200px'
//     // img.style.height = '120px'
//     document.body.appendChild(img);
    
//  }).catch(ex => {
//   headerInfo.innerText = "Nie znaleziono wybranego pliku!"
//  })
// })

//Listowanie plików w consoli
// const storageRef = ref(storage);
// listAll(storageRef).then((res) => {
//   // console.log(res.items)
//  res.items.forEach(item => {
//  console.log(item.name);
//  })
// })

//Lista numerowana na stronie z nazwami plików
const ol = document.createElement('ol');
ol.setAttribute('id', 'listaNumerowana');
document.body.appendChild(ol);
const fotka = document.createElement('img');

const storageRef = ref(storage);
listAll(storageRef).then((res) => {
  document.getElementById('listaNumerowana');
  res.items.forEach(item => {
    const li = document.createElement('li');
    const buttonShowFoto = document.createElement('button');

    buttonShowFoto.addEventListener('click', () => {
    // console.log(item.name)
    const imageRef = ref(storage,item.name);
    // console.log(imageRef);
    getDownloadURL(imageRef).then(url => {
        console.log(url);
        fotka.src = url;
        fotka.style.width = '200px'
        document.body.appendChild(fotka);
          
       })
  });

    buttonShowFoto.innerText = 'pokaz zdjecie';
    li.innerText = item.name;

    ol.appendChild(li);
    li.appendChild(buttonShowFoto);
 })
})


