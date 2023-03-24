import './../styles/styles.css';

import { initializeApp } from "firebase/app";
import { deleteObject, getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";


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
    const delateFoto = document.createElement('button');
  

    buttonShowFoto.addEventListener('click', () => {
    // console.log(item.name)
    const imageRef = ref(storage,item.name);
    // console.log(imageRef);
    getDownloadURL(imageRef).then(url => {
        // console.log(url);
        fotka.src = url;
        fotka.style.width = '200px'
        ol.appendChild(fotka);
          
       })
  });

    delateFoto.addEventListener('click', () => {
      const imageRef = ref(storage,item.name);
      deleteObject(imageRef).then(() => {
        console.log("Usunięto");
        setTimeout(() => {
          location.reload()
        }, 500); ;
        let dopisek = document.createElement('h2');
        dopisek.innerText = 'usunięto'+ item.name;
        document.body.appendChild(dopisek);
       })
  }
)

    buttonShowFoto.innerText = 'pokaz zdjecie';
    delateFoto.innerText = 'usuń zdjecie';
    li.innerText = item.name;

    ol.appendChild(li);
    li.appendChild(buttonShowFoto);
    li.appendChild(delateFoto);
 })
})


// Utwórz aplikację, która wyświetli wszystkie obrazki dostępne w Storage wraz z ich nazwami.

const listaZobrazkami = document.createElement('div');
let dopisek = document.createElement('h2');
listaZobrazkami.setAttribute('class', 'listaObrazki');
document.body.appendChild(listaZobrazkami);
listaZobrazkami.appendChild(dopisek);
dopisek.innerText = '';

listAll(storageRef).then((res) => {
  document.getElementById('listaObrazki');
  res.items.forEach(item => {
    const div = document.createElement('div');
    const buttonDel = document.createElement('button');
    buttonDel.innerText = 'usuń obrazek'
    buttonDel.style.cursor = 'pointer' 

    listaZobrazkami.style.display = 'flex';        
    listaZobrazkami.style.flexWrap = 'wrap';  
    
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.alignItems = 'center';
    div.style.padding = '10px';
    div.style.marginTop = '10px';

    const imageRef = ref(storage,item.name);
  
    getDownloadURL(imageRef).then(url => {
      const img = document.createElement('img');
      
      // console.log(url);
        img.src = url;
        img.style.width = '200px'
        div.appendChild(img);
        div.appendChild(buttonDel);
        img.style.padding = '10px';
        img.style.margin = '10px';
        img.style.boxSizing = 'border-box';

       })

       buttonDel.addEventListener('click', () => {
        
        const imageRef = ref(storage,item.name);
        deleteObject(imageRef).then(() => {
        listaZobrazkami.removeChild(div);
        dopisek.innerText = 'usunięto '+ item.name
        setTimeout(() => {
          dopisek.innerText = '';
        }, 1000);
        ;
       })
      });

      
   

    div.innerText = item.name;
    listaZobrazkami.appendChild(div);
    
  })
    })


//zad7

const inputFile2 = document.createElement('input');
const inputTekst2 = document.createElement('input');
const button2 = document.createElement('button');

inputFile2.setAttribute('type', 'file');
inputFile2.setAttribute('id', 'myFile2'); 

inputTekst2.setAttribute('type', 'text');
inputTekst2.setAttribute('id', 'myFileText2');

button2.setAttribute('id', 'myButt');
button2.innerText= 'dodaj';

document.body.appendChild(inputFile2);
document.body.appendChild(inputTekst2);
document.body.appendChild(button2);
const url = "https://firebasestorage.googleapis.com/v0/b/naukamoja-50dd4.appspot.com/o/1.jpg?alt=media&token=01267ef1-a84d-4c62-995d-1a53f27aa0af"

document.getElementById('myButt').addEventListener('click', ()=> {
  const file = document.getElementById('myFile2').files[0];
  
  let fileName = file.name;
  let folder1 = 'Kategoria1'
  
  const imageRef = ref(storage, folder1/fileName);
})

