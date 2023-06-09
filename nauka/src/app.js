import './../styles/styles.css';

import { initializeApp } from "firebase/app";
import { deleteObject, getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";
import {addDoc, collection, deleteDoc, deleteField, doc, getDoc, getDocs, getFirestore, query, setDoc, updateDoc, where} from "firebase/firestore"
import { getDatabase, onChildAdded, onValue, push, ref as rdbRef, set} from "firebase/database";
import { getAuth, EmailAuthProvider, onAuthStateChanged, GoogleAuthProvider, signOut } from "firebase/auth";
import * as firebaseui from 'firebaseui';


const firebaseConfig = {
  apiKey: "AIzaSyCXJWy6s_1p1qdH7qDvwUdo4wNZBMg1ASA",
  authDomain: "naukamoja-50dd4.firebaseapp.com",
  databaseURL: "https://naukamoja-50dd4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "naukamoja-50dd4",
  storageBucket: "naukamoja-50dd4.appspot.com",
  messagingSenderId: "149285652768",
  appId: "1:149285652768:web:a14fd357e02ddc9e08ef45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage
const storage = getStorage(app);
const db = getFirestore(app);
const rdb = getDatabase(app);

const auth = getAuth(app);
const ui = new firebaseui.auth.AuthUI(auth);


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
// function wyswietl() {
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


// const headerKat = document.createElement('h1');
// const inputFile2 = document.createElement('input');
// const inputTekst2 = document.createElement('input');
// const button1 = document.createElement('button');
// const button2 = document.createElement('button');
// const button3 = document.createElement('button');
// const button4 = document.createElement('button');

// const ol2 = document.createElement('ol');
// ol2.setAttribute('id', 'olLista');

// inputFile2.setAttribute('type', 'file');
// inputFile2.setAttribute('id', 'myFile2'); 

// inputTekst2.setAttribute('type', 'text');
// inputTekst2.setAttribute('id', 'myFileText2');

// headerKat.innerText = 'Dodawanie pliku do folderu';

// button1.setAttribute('id', 'myButt');
// button1.innerText= 'dodaj do K1';

// button2.setAttribute('id', 'myButt2');
// button2.innerText= 'dodaj do K2';

// button3.setAttribute('id', 'myButt3');
// button3.innerText= 'dodaj do K3';

// button4.setAttribute('id', 'myButt4');
// button4.innerText= 'dodaj do K4';


// document.body.appendChild(headerKat);
// document.body.appendChild(ol2);
// ol2.appendChild(inputFile2);
// ol2.appendChild(inputTekst2);
// ol2.appendChild(button1);
// ol2.appendChild(button2);
// ol2.appendChild(button3);
// ol2.appendChild(button4);

// const url = "https://firebasestorage.googleapis.com/v0/b/naukamoja-50dd4.appspot.com/o/1.jpg?alt=media&token=01267ef1-a84d-4c62-995d-1a53f27aa0af"

// document.getElementById('myButt').addEventListener('click', ()=> {
//   const file = document.getElementById('myFile2').files[0];
//   const tekstInput = document.getElementById('myFileText2');
  
//   let fileName = file.name;
//   let folderName = 'Kategoria1'
  

//   if(tekstInput.value){
//   fileName = tekstInput.value;
//   }
//   let filePath1 = folderName + '/' + fileName;

//   const imageRef = ref(storage, filePath1);

//   uploadBytes(imageRef, file).then((uploadResult) => {
//     console.log("Sukces!");
//     })
// });

// document.getElementById('myButt2').addEventListener('click', ()=> {
//   const file = document.getElementById('myFile2').files[0];
//   const tekstInput = document.getElementById('myFileText2');
  
//   let fileName = file.name;
//   let folderName = 'Kategoria2';

//   if(tekstInput.value){
//   fileName = tekstInput.value;
//   }
//   let filePath2 = folderName + '/' + fileName;
  
//   const imageRef = ref(storage, filePath2);

//   uploadBytes(imageRef, file).then((uploadResult) => {
//     console.log("Sukces!");
//     })
// });

// document.getElementById("myButt3").addEventListener('click', () => {
//   const file = document.getElementById('myFile2').files[0];
//   const tekstInput = document.getElementById('myFileText2');
//   let fileName = file.name;
//   let folderName = 'Kategoria3';

//   if(tekstInput.value){
//     fileName = tekstInput.value;
//   } 
//   let filePath3 = folderName + '/' + fileName;
//   const imageRef = ref(storage, filePath3);

//   uploadBytes(imageRef, file).then((uploadResult) => {
//     console.log('Sukces!')
//   })
// });

// document.getElementById("myButt4").addEventListener('click', () => {
//   const file = document.getElementById('myFile2').files[0];
//   const tekstInput = document.getElementById('myFileText2');
//   let fileName = file.name;
//   let folderName = 'Kategoria4';

//   if(tekstInput.value){
//     fileName = tekstInput.value;
//   } 
//   let filePath4 = folderName + '/' + fileName;
//   const imageRef = ref(storage, filePath4);

//   uploadBytes(imageRef, file).then((uploadResult) => {
//     console.log('Sukces!')
//   })
// });



//Iterujemy sie po folderach
const naglowek1 = document.createElement("h3");
naglowek1.innerText = 'Wysyłanie dokumentu do wybranego albumu, wyświetlanie z wybranego albumu';
document.body.appendChild(naglowek1);

const listaFolderów = document.createElement('select');
const nazwaDlaPliku = document.createElement('input');
const btnFolder = document.createElement('button');
const pustyOpt = document.createElement('option');
const showPhoto = document.createElement('button');


btnFolder.innerText = 'dodaj';
showPhoto.innerText = 'wyświetl zdjęcie'
nazwaDlaPliku.setAttribute('type', 'file')

document.body.appendChild(listaFolderów);
document.body.appendChild(nazwaDlaPliku)
document.body.appendChild(btnFolder);
listaFolderów.appendChild(pustyOpt);
document.body.appendChild(showPhoto);

listAll(storageRef).then((res) => {
  
  res.prefixes.forEach( prefix => {
    // console.log(prefix.fullPath);
    const folderNazwa = document.createElement('option');
    
    folderNazwa.innerText = prefix.fullPath;
    

    listaFolderów.appendChild(folderNazwa);
  }) 
})
  btnFolder.addEventListener('click', ()=> {
  if(listaFolderów.value){
    console.log(listaFolderów.value);

    const file = nazwaDlaPliku.files[0];
    let fileName = file.name;

    const imageRef = ref(storage, `${listaFolderów.value}/${fileName}`);

    uploadBytes(imageRef, file).then(() => {
      console.log("Sukces!");
}) }})
 
    
  showPhoto.addEventListener("click", ()=> {
    const albumRef = ref(storage, listaFolderów.value);
    listAll(albumRef).then((res => {
      res.items.forEach(item => {
        const itemRef = ref(storage,item.fullPath)
        
      getDownloadURL(itemRef).then(url => {
        const img = document.createElement('img') 
        img.src = url;
        img.style.width = '200px'
        document.body.appendChild(img);
      })
      })
      }))
  });
const nowaLinia = document.createElement('div')
document.body.appendChild(nowaLinia);


  // const jkDoc = doc(db, 'users', 'JanKowalskiID');
  // setDoc(jkDoc, {
  //   name: 'Jan',
  //   surname: 'Kowalski'
  // })



const naglowek = document.createElement("h3");
naglowek.innerText = 'Wysyłanie dokumentu do bazy danych, ID z imienia+nazwiska+wieku';
document.body.appendChild(naglowek);

const imie = document.createElement('input');
const nazwisko = document.createElement('input');
const wiek = document.createElement('input');
const przycisk = document.createElement('button');

imie.setAttribute('type', 'text');
nazwisko.setAttribute('type', 'text');
wiek.setAttribute('type', 'number');

imie.setAttribute('placeholder', 'imie');
nazwisko.setAttribute('placeholder', 'nazwisko');
wiek.setAttribute('placeholder', 'wiek');

przycisk.innerText='wyślij';

document.body.appendChild(imie);
document.body.appendChild(nazwisko);
document.body.appendChild(wiek);
document.body.appendChild(przycisk);

przycisk.addEventListener('click', () => {
  const jkDoc = doc(db, 'users', `${imie.value}${nazwisko.value}${wiek.value}`);
setDoc(jkDoc, {
  name: imie.value,
  surname: nazwisko.value,
  age: wiek.value
}).then(() => {
   console.log("Sukces!");
      imie.value = ''
      nazwisko.value = ''
      wiek.value = ''

});
});



const naglowek2 = document.createElement("h3");
naglowek2.innerText = 'Pobieranie z bazy danych osób po ID, które znamy';
document.body.appendChild(naglowek2);

const imie1 = document.createElement('input');
const nazwisko1 = document.createElement('input');
const wiek1 = document.createElement('input');

imie1.setAttribute('type', 'text');
nazwisko1.setAttribute('type', 'text');
wiek1.setAttribute('type', 'number');

imie1.setAttribute('placeholder', 'imie');
nazwisko1.setAttribute('placeholder', 'nazwisko');
wiek1.setAttribute('placeholder', 'wiek');

document.body.appendChild(imie1);
document.body.appendChild(nazwisko1);
document.body.appendChild(wiek1);

const LauraAster11 = doc(db, "users", "LauraAster11");
getDoc(LauraAster11).then(dok => {
  // console.log(dok.data());

  const zmienna = dok.data();
  imie1.value = zmienna.name;
  nazwisko1.value = zmienna.surname;
  wiek1.value = zmienna.age;
})



const naglowek3 = document.createElement("h3");
naglowek3.innerText = 'Wysyłanie dokumentu do bazy danych, ID wygenerowany automatycznie';
document.body.appendChild(naglowek3);

const imie3 = document.createElement('input');
const nazwisko3 = document.createElement('input');
const wiek3 = document.createElement('input');
const przycisk3 = document.createElement('button');

imie3.setAttribute('type', 'text');
nazwisko3.setAttribute('type', 'text');
wiek3.setAttribute('type', 'number');

imie3.setAttribute('placeholder', 'imie');
nazwisko3.setAttribute('placeholder', 'nazwisko');
wiek3.setAttribute('placeholder', 'wiek');

przycisk3.innerText='wyślij';

document.body.appendChild(imie3);
document.body.appendChild(nazwisko3);
document.body.appendChild(wiek3);
document.body.appendChild(przycisk3);

przycisk3.addEventListener('click', () => {
  const usersCollection = collection(db, "users")
  addDoc(usersCollection, {
  name: imie3.value,
  surname: nazwisko3.value,
  age: wiek3.value
}).then(() => {
  console.log("Sukces!");
      imie3.value = '';
      nazwisko3.value = '';
      wiek3.value = '';
});
});



const naglowek4 = document.createElement("h3");
naglowek4.innerText = 'Wyświetlanie użytkowników z bazy danych i ich aktualizacja';
document.body.appendChild(naglowek4);

const naglowek5 = document.createElement("h4");
naglowek5.innerText = '';
document.body.appendChild(naglowek5);


const imie4 = document.createElement('input');
const nazwisko4 = document.createElement('input');
const wiek4 = document.createElement('input');

imie4.setAttribute('type', 'text');
nazwisko4.setAttribute('type', 'text');
wiek4.setAttribute('type', 'number');

imie4.setAttribute('placeholder', 'imie');
nazwisko4.setAttribute('placeholder', 'nazwisko');
wiek4.setAttribute('placeholder', 'wiek');

document.body.appendChild(imie4);
document.body.appendChild(nazwisko4);
document.body.appendChild(wiek4);

const btnEditUser = document.createElement('button');
const btnList = document.createElement('button');
const listaUzytkownikow = document.createElement('ol');

btnList.innerText= 'wyświetl listę';
btnEditUser.innerText= 'Edytuj użytkownika';

document.body.appendChild(btnEditUser);
document.body.appendChild(btnList);
document.body.appendChild(listaUzytkownikow);
 

btnList.addEventListener('click', ()=> {
function generateUsersList() { 
getDocs(collection(db, "users")).then((docs) => {
    listaUzytkownikow.innerHTML= '';
    docs.forEach(dok => {
      // console.log(dok.data())
      const uzytkownik = document.createElement("li");
      const btnEdit= document.createElement("button");
      const btnDel= document.createElement("button");

      const myUser = dok.data();
      uzytkownik.innerText = `${myUser.name} ${myUser.surname} ${myUser.age}`;
      btnEdit.innerText = 'edytuj'
      btnDel.innerText = 'usuń'

      btnEdit.style.padding = '5px'
      btnEdit.style.margin = '5px'
      btnDel.style.padding = '5px'
      btnDel.style.margin = '5px'

      listaUzytkownikow.appendChild(uzytkownik);
      uzytkownik.appendChild(btnEdit);
      uzytkownik.appendChild(btnDel);

        btnEdit.addEventListener('click', ()=> {
          imie4.value = myUser.name;
          nazwisko4.value = myUser.surname;
          wiek4.value = myUser.age;
          // console.log(dok.id)
          naglowek5.innerText = dok.id;
          });

        btnDel.addEventListener('click', () => {
          const jkDoc = doc(db, "users", dok.id);
          deleteDoc(jkDoc).then(() => {
            console.log('usunięto');
            // listaUzytkownikow.removeChild(uzytkownik);
            generateUsersList();
          })
        });
      });

      
  });
}
generateUsersList()

      btnEditUser.addEventListener('click', ()=> {
      const jkDoc = doc(db, "users", naglowek5.innerText);
      updateDoc(jkDoc, {
       name: imie4.value,
       surname: nazwisko4.value,
       age: wiek4.value
      }).then(() => {
        console.log('sukces!');
      imie4.value = '';
      nazwisko4.value = '';
      wiek4.value = '';
      naglowek5.innerText = '';
      generateUsersList();
      });
      });
});




const naglowek6 = document.createElement("h3");
naglowek6.innerText = 'Wyszukanie użytkowników po imieniu';
document.body.appendChild(naglowek6);

const btnSearch = document.createElement('button');
const inputImie = document.createElement('input');
const ListPerson = document.createElement('ol');

inputImie.setAttribute('placeholder', 'imie');
btnSearch.innerText='szukaj';

document.body.appendChild(inputImie);
document.body.appendChild(btnSearch);
document.body.appendChild(ListPerson);

btnSearch.addEventListener('click', ()=>{
  const users = collection(db, "users");
  const usersQuery = query(users, where("name", "==", inputImie.value));

  getDocs(usersQuery).then(docs => {
    ListPerson.innerHTML ='';
    docs.forEach(myDoc => {
      const myUser = myDoc.data();
      const myLi = document.createElement("li");
      myLi.innerText = `${myUser.name} ${myUser.surname} ${myUser.age}`;
      ListPerson.appendChild(myLi);
    })
  })
});

inputImie.addEventListener('keydown', (event)=>{
  if(event.key === 'Enter') {
  const users = collection(db, "users");
  const usersQuery = query(users, where("name", "==", inputImie.value));

  getDocs(usersQuery).then(docs => {
    ListPerson.innerHTML ='';
    docs.forEach(myDoc => {
      const myUser = myDoc.data();
      const myLi = document.createElement("li");
      myLi.innerText = `${myUser.name} ${myUser.surname} ${myUser.age}`;
      ListPerson.appendChild(myLi);
    })
  })
}})




// zapisujemy za pomocą pobranej referencji i metody set
// const janRef = rdbRef(rdb, 'users/JanId');
// set(janRef, {
//  name: "Jan",
//  surname: "Kowalski"
// });

// dodawanie z automatycznie wygenerowanym ID
// const usersRef = rdbRef(rdb, 'users');
// const janRef = push(usersRef);
// set(janRef, {
//   name: 'NowyJan',
//   surname: 'NowyKowalski'
// })

// nasłuchiwanie na zmainy na obiekcie
// const usersRef = rdbRef(rdb, 'users');
// onValue(usersRef, snapshot => {
//   console.log(snapshot);
//   const myUsers = snapshot.val();

//   for(let prop in myUsers){
//     console.log(prop)
//   }
// });

const naglowek7 = document.createElement("h3");
naglowek7.innerText = 'Mini chat';
document.body.appendChild(naglowek7);

const textarea = document.createElement('textarea');
const btnWyslij = document.createElement('button');
const messageContainer = document.createElement('div');

btnWyslij.innerText= 'send';
messageContainer.setAttribute('class', 'message')

document.body.appendChild(textarea);
document.body.appendChild(btnWyslij); 
document.body.appendChild(messageContainer); 

const messagesRef = rdbRef(rdb, 'message');

onChildAdded(messagesRef, (messageSnapshot) => {
  const mySpan = document.createElement('span');
  const message = messageSnapshot.val();

  mySpan.innerText = `${message.timestamp} --- ${message.text}`;
  messageContainer.appendChild(mySpan);
});

btnWyslij.addEventListener('click', ()=> {
  const messageRef = push(messagesRef);

  set(messageRef, {
    text: textarea.value,
    timestamp: new Date().toISOString()
  });
});
// }

ui.start('#firebaseui-auth-container', {
  signInOptions: [
  EmailAuthProvider.PROVIDER_ID,
  GoogleAuthProvider.PROVIDER_ID
  ],
  signInSuccessUrl: "https://naukamoja-50dd4.web.app/"
 });

 onAuthStateChanged(auth, (user) => {
  if (user) {
    
    // wyswietl();
    naglowek7.style.display="block";
    textarea.style.display="block";
    btnWyslij.style.display="inline-block";
    btnWyloguj.style.display="inline-block";
    messageContainer.style.display="flex"; 
  } else {
    naglowek7.style.display="none";
    textarea.style.display="none";
    btnWyslij.style.display="none";
    btnWyloguj.style.display="none";
    messageContainer.style.display="none";
  }
});

const btnWyloguj = document.createElement('button');
btnWyloguj.innerText = 'wyloguj';
document.body.appendChild(btnWyloguj); 

btnWyloguj.addEventListener('click', () => {
  signOut(auth).then(() => {
    console.log("Wylogowano!");
    const infwyl = document.createElement("h2");
    infwyl.innerText = 'Nastąpiło wylogowanie!';
    setTimeout(() => {
      infwyl.innerText = '';
    }, 500);
    document.body.appendChild(infwyl);
   });
});