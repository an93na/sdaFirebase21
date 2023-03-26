import './../styles/styles.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getStorage, uploadBytes } from "firebase/storage";
import { deleteObject, getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";
import {addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, setDoc, updateDoc, where} from "firebase/firestore"
import { getDatabase, onChildAdded, onValue, push, ref as rdbRef, set } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz-schzsSeoer3tFdieQIAbt6UpQ1S0KQ",
  authDomain: "moj121frontpol.firebaseapp.com",
  projectId: "moj121frontpol",
  databaseURL: "https://moj121frontpol-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "moj121frontpol.appspot.com",
  messagingSenderId: "127781220621",
  appId: "1:127781220621:web:2bb4d7b5a19af12e5f8044"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const rdb = getDatabase(app);

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
// const img = document.createElement("img");
// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//   const Ola = document.getElementById("photoList");
  
//   res.items.forEach(item => {
//     let newOla = document.createElement("li");
//     const przycisk = document.createElement("button");
//     const przyciskDel = document.createElement("button");

//     przycisk.addEventListener("click", () => {
//     const imageRef = ref(storage,item.name);
    
//     getDownloadURL(imageRef).then(url => {  
//         img.src = url;
//         img.style.width = "250px";
//         document.body.appendChild(img);
//       })

//     // console.log(imageRef)
//   });
  

//     przyciskDel.addEventListener("click", () => {
//     const imageRef = ref(storage,item.name);

//     deleteObject(imageRef).then( url => { 
//     // console.log("usunięto")
//     location.reload();}
        
//       )

//     // console.log(imageRef)
//   });

//     przycisk.innerText= "Naciśnij Proszę"
//     przyciskDel.innerText = "Usuń"
//     newOla.innerText = item.name;

//     Ola.appendChild(newOla);
//     newOla.appendChild(przycisk);
//     newOla.appendChild(przyciskDel);
//   });
// });

// const albumsList = document.createElement('select')
// albumsList.setAttribute('id', 'myAlbum');
// document.body.appendChild(albumsList);

// let opt1 = document.createElement('option');
// albumsList.appendChild(opt1);

// const inputAlbum = document.createElement('input');
// inputAlbum.setAttribute('type', 'file');
// document.body.appendChild(inputAlbum);

// const buttonAlbum = document.createElement('button');
// buttonAlbum.innerText = "Załaduj zdjęcie";
// buttonAlbum.setAttribute('id', 'ZaladujFoto');
// document.body.appendChild(buttonAlbum);

// const buttonWyswietl = document.createElement('button');
// buttonWyswietl.innerText = "Wyswietl zdjecie";
// buttonWyswietl.setAttribute('id', 'zdjecieZalbumu');
// document.body.appendChild(buttonWyswietl);


// buttonAlbum.addEventListener('click', () => {
//   if(albumsList.value){
//     // console.log(albumsList.value);
//     const file = inputAlbum.files[0];
//     const imageRef = ref(storage, `${albumsList.value}/${file.name}`)
//     uploadBytes(imageRef, file).then((uploadResult) => {
//      console.log('sukces');
//     })}
  

// });

// const img = document.createElement('img');
// buttonWyswietl.addEventListener('click', ()=>{
//     const albumRef = ref(storage, albumsList.value);
//     listAll(albumRef).then(res => {
//       res.items.forEach(item => {
//         const itemRef = ref(storage, item.fullPath);
//         // console.log(itemRef)
//         getDownloadURL(itemRef).then(url => {
//           // console.log(url);
//           img.src = url;
//           img.style.width = '200px'
//           document.body.appendChild(img);
            
//          })
//       })
//     })
// })

// const storageRef = ref(storage);
// listAll(storageRef).then(res => { 
//   res.prefixes.forEach(prefix => {
//     // console.log(prefix.name);
    
//     let opt = document.createElement('option');
//     opt.innerText = prefix.name;
//     albumsList.appendChild(opt);

//   })
  
//   });

// const inputName = document.createElement('input');
// const inputSurname = document.createElement('input');
// const inputAge = document.createElement('input');
// const buttonDoc = document.createElement('button');

// inputAge.setAttribute('type', 'number');
// buttonDoc.innerText='Dodaj';

// document.body.appendChild(inputName);
// document.body.appendChild(inputSurname);
// document.body.appendChild(inputAge);
// document.body.appendChild(buttonDoc);


// buttonDoc.addEventListener('click', () =>{
  
//   const myId = `${inputName.value}${inputSurname.value}${inputAge.value}`;
//   const jkDoc = doc(db, 'users', myId);
//   setDoc(jkDoc, {
//     name: inputName.value,
//     surname: inputSurname.value,
//     age: inputAge.value
//   }).then(() => console.log("sukcess"))
// })

// const jkDoc = doc(db, 'users', 'PaulinaKapeć30');
// getDoc(jkDoc).then(doc => {
//   inputName.value = doc.data().name;
//   inputSurname.value = doc.data().surname;
//   inputAge.value = doc.data().age;

// });

// const inputName = document.createElement('input');
// const inputSurname = document.createElement('input');
// const inputAge = document.createElement('input');
// const buttonDoc = document.createElement('button');

// inputAge.setAttribute('type', 'number');
// buttonDoc.innerText='Dodaj';

// document.body.appendChild(inputName);
// document.body.appendChild(inputSurname);
// document.body.appendChild(inputAge);
// document.body.appendChild(buttonDoc);

// const ol = document.createElement('ol');
// ol.setAttribute('id', 'listaUzytkownikow');
// document.body.appendChild(ol);
// const EditBtn = document.getElementById('editUser');
// const edytowanyUz = document.getElementById('userID');

// const usersCollection = collection(db, "users");

// function generateUserList(){
//   getDocs(usersCollection).then(docs => {
//   ol.innerText = '';
//   docs.forEach((mydoc) => {
//   const li = document.createElement('li');
//   const editButton = document.createElement('button');
//   const delButton = document.createElement('button');

//   const myUser = mydoc.data();
//   // console.log(doc.id)
  
//   li.innerText = `${myUser.name} ${myUser.surname} ${myUser.age}`;
//   editButton.innerText = 'edytuj';
//   editButton.style.padding = '5px';
//   editButton.style.margin = '5px';
  
//   delButton.innerText = 'usuń';
//   delButton.style.padding = '5px';
//   delButton.style.margin = '5px';
  
//   editButton.addEventListener('click', () => {
//     inputName.value = myUser.name,
//     inputSurname.value = myUser.surname,
//     inputAge.value =  myUser.age;
//     buttonDoc.style.display = 'none';
//     EditBtn.style.display = 'inline';
//     edytowanyUz.innerText = mydoc.id;

//   });

//   delButton.addEventListener('click', ()=> {
//     const jkDoc = doc(db, "users", mydoc.id);
//     deleteDoc(jkDoc).then (() => {console.log('usunięto')
//       generateUserList();
//   });
    
//   });
//   const idUzyt = mydoc.id;
//   // console.log(idUzyt)


//   ol.appendChild(li);
//   li.appendChild(editButton);
//   li.appendChild(delButton);

// })  
// })}    

// generateUserList()

// buttonDoc.addEventListener('click', () =>{
//   const usersCollection = collection(db, "users")
//     addDoc(usersCollection, {
//     name: inputName.value,
//     surname: inputSurname.value,
//     age: inputAge.value
//   }).then(() => {
//     generateUserList();
//   })
//   })

// EditBtn.addEventListener('click', () => {
//       const jkDoc = doc(db, "users", edytowanyUz.innerText);
//       updateDoc(jkDoc, {
//       name: inputName.value,
//       surname: inputSurname.value,
//       age: inputAge.value
// }).then(() => {
//   edytowanyUz.innerText = '';
//   inputName.value = '';
//   inputSurname.value = '';
//   inputAge.value = '';
//   buttonDoc.style.display = 'inline-block';
//   EditBtn.style.display = 'none';
//   generateUserList();
// })
// });

// const wpiszImie = document.createElement('input');
// const szukajImie = document.createElement('button');
// const listaElementow = document.createElement('ol');

// wpiszImie.style.placeholder = 'imie';
// szukajImie.innerText = 'wyszukaj';

// document.body.appendChild(wpiszImie);
// document.body.appendChild(szukajImie);
// document.body.appendChild(listaElementow);

// szukajImie.addEventListener('click', () => {
// const users = collection(db, "users");
// const imieWpisane = query(users, where("name", "==", wpiszImie.value));

// getDocs(imieWpisane).then(docs => {
//   listaElementow.innerHTML = "";
//   docs.forEach(myDoc => {
//   console.log(myDoc.data())
//   let myUser = myDoc.data()
//   const myLi = document.createElement('li')
//   myLi.innerText = `${myUser.name} ${myUser.surname} ${myUser.age}`
//   listaElementow.appendChild(myLi);
// })
//  })

// }) 


// wpiszImie.addEventListener('keydown', (event) => {
//   if(event.key === 'Enter'){
//     const users = collection(db, "users");
// const imieWpisane = query(users, where("name", "==", wpiszImie.value));

// getDocs(imieWpisane).then(docs => {
//   listaElementow.innerHTML = "";
//   docs.forEach(myDoc => {
//   console.log(myDoc.data())
//   let myUser = myDoc.data()
//   const myLi = document.createElement('li')
//   myLi.innerText = `${myUser.name} ${myUser.surname} ${myUser.age}`
//   listaElementow.appendChild(myLi);
// })
//  })
//   }
// }) 





// const janRef = rdbRef(rdb, 'users/JanId');
// set(janRef, {
//   name: 'Jan',
//   surname: 'Kowalski'
// }) 

// const usersRef = rdbRef(rdb, 'users');
// const janRef = push(usersRef);

// set(janRef, {
//   name: 'NowyJan',
//   surname: 'NowyKowalski'
// }
//   );

// const usersRef = rdbRef(rdb, 'users');
// onValue(usersRef,snapshot => {
//   console.log(snapshot);
//   console.log(snapshot.val());
//   const myUsers = snapshot.val();
//   console.log(myUsers)

//   for(let prop in myUsers){
//     console.log(prop)
//   }
// })
// 
// const usersRef = rdbRef(rdb, 'users');
// onChildAdded(usersRef,snapshot => {
//   console.log(snapshot);
//   console.log(snapshot.val());
//   const myUsers = snapshot.val();
//   console.log(myUsers)

//   for(let prop in myUsers){
//     console.log(prop)
//   }
// })

const messageTextInput = document.createElement('textarea');
const sendBtn = document.createElement('button');
const messageContainer = document.createElement('div');

sendBtn.innerText = 'wyślij'

document.body.appendChild(messageTextInput);
document.body.appendChild(sendBtn);
document.body.appendChild(messageContainer);

messageContainer.setAttribute('class', 'message-container')

const messagesRef = rdbRef(rdb, 'messages')
onChildAdded(messagesRef, (messageSnapshot) => {
    const mySpan = document.createElement('span');
    const message = messageSnapshot.val();

    mySpan.innerText = `${message.timestamp} ------ ${message.text}`;

    messageContainer.appendChild(mySpan);
})

sendBtn.addEventListener('click', () => {
  const messageRef = push(messagesRef);

  set(messageRef, {
    text: messageTextInput.value,
    timestamp: new Date().toISOString()
  }) 
})
