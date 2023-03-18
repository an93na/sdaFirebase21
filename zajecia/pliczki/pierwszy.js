import { bodySelector } from "./const.js";
import { isEmpty as ArrayEmpty} from "./utils.js";
import { isEmpty as isObjectEmpty } from "./core.js";
import { createButton } from "./utils.js";
import { pokazAlert } from "./core.js";


// console.log("Test 1, 2, 3");
// console.log(bodySelector);
// console.log(ArrayEmpty([]));
// console.log(isObjectEmpty([]));
const button = createButton();
button.addEventListener('click', pokazAlert);