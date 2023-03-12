import './../styles/styles.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getStorage, uploadBytes } from "firebase/storage";
import { getStorage, ref, uploadBytes } from "firebase/storage";

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


async function myFunc () {
  const data = await fetch("https://reqres.in/api/users")
  const users = await data.json();
  console.log(users.data);
}

myFunc();



const headerInfo = document.getElementById("myHeader");
const mojButton = document.getElementById("myButton");
const tekstUzytkownika = document.getElementById("tekstUzytkownika")

mojButton.addEventListener("click", () => {
  //console.log('Kliknięto przcisk')
    headerInfo.innerText= "Przesyłam..."
    const file = document.getElementById("myFile").files[0];
    let fileName = file.name;

    if(tekstUzytkownika.value){
      fileName = tekstUzytkownika.value
    }
    const imageRef = ref(storage, fileName);
    
    uploadBytes(imageRef, file).then(() => {
      console.log("Sukces!");
      headerInfo.innerText= "Przesłano"
    })
  }
) 