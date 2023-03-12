import './../styles/styles.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getStorage, uploadBytes } from "firebase/storage";
import { getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";

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



// const url = "https://firebasestorage.googleapis.com/v0/b/moj121frontpol.appspot.com/o/IMG_20201122_101754.jpg?alt=media&token=6cf101bc-283b-4815-a7c2-1cddf9d7c995"

// const obrazek = document.createElement("img");
// obrazek.setAttribute("src", url);  //img.src =
// document.body.appendChild(obrazek);

// const link = "https://reqres.in/api/users?page=2"
// fetch(link)
// .then((daneZPromisa) => daneZPromisa.json())
// .then((danezJSON) => console.log(danezJSON.data));


// async function myFunc () {
//   const data = await fetch("https://reqres.in/api/users")
//   const users = await data.json();
//   console.log(users.data);
// }

// myFunc();



// const headerInfo = document.getElementById("myHeader");
// const mojButton = document.getElementById("myButton");
// const tekstUzytkownika = document.getElementById("tekstUzytkownika")
// const img = document.createElement("img");

// mojButton.addEventListener("click", () => {
//   //console.log('Kliknięto przcisk')
//     headerInfo.innerText= "Przesyłam..."
//     const file = document.getElementById("myFile").files[0];
//     let fileName = file.name;

//     if(tekstUzytkownika.value){
//       fileName = tekstUzytkownika.value
//     }
//     const imageRef = ref(storage, fileName);
    
    

//     uploadBytes(imageRef, file).then(() => {
//       console.log("Sukces!");
//       headerInfo.innerText= "Przesłano"

//       getDownloadURL(imageRef).then(url => {  
//       img.src = url;
//       img.style.width = "250px";
//       document.body.appendChild(img);
//     })

//     })
//   }
// ) 

//1. Dodac Input do podawania nazwy obrazka
//2. Dodac przycisk do wyswietlania obrazka
//3. Na klikniecie przycisku wyswietlic zdjecie
//4. Przekazac nazwe do refa
//5. Wyswietlic blad w headerInfo

// const myShowFileNameInput = document.getElementById("myShowFileName");
// const showPhoto = document.getElementById("showPhoto")
// const img = document.createElement("img");

// showPhoto.addEventListener("click", () => {
//   const imageRef = ref(storage, myShowFileNameInput.value);
  
//   headerInfo.innerText = "";
//   getDownloadURL(imageRef).then(url => {  
  
//   img.src = url;
//   img.style.width = "250px";
//   document.body.appendChild(img);
// })
// .catch(ex => {
//   headerInfo.innerText = "FOTO NIE ISTNIEJE!!!"
// })}
// )


// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//   for (let i = 0; i<res.items.length; i++){
//     console.log(res.items[i].name)
//   }
// });

// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//   const Ola = document.getElementById("photoList");// Pobieramy getElementById - element OL
//   for (let i = 0; i < res.items.length; i++) {
//      let newOla = document.createElement("li"); // tworzymy nowy lement li - createElement
//      newOla.innerText = res.items[i].name // w elemencie li ustawiamy tekst na nazwe pliku innerText / res.items[i].name
//      Ola.appendChild(newOla)  // li dodajemy do ol - appendChild  
//   }
// });

const storageRef = ref(storage);
listAll(storageRef).then(res => {
  const Ola = document.getElementById("photoList");
  
  res.items.forEach(item => {
    let newOla = document.createElement("li");
    const przycisk = document.createElement("button");

    przycisk.addEventListener("click", () => console.log("Siemanko"));

    przycisk.innerText= "Naciśnij Proszę"
    newOla.innerText = item.name;

    Ola.appendChild(newOla);
    newOla.appendChild(przycisk);
  });
});
