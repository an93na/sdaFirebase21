import { buttonTag } from "./const.js";

export function isEmpty(arr) {
    return !arr || arr.length === 0;
}

// export function isEmpty(arr) {
//     if(arr){
//         return arr.length === 0;
//     }
//     return true;
// }

export function createButton() {
    const button = document.createElement(buttonTag);
    document.body.appendChild(button);
    button.innerText = "Klik";
    return button;
}