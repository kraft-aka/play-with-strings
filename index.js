const msg = document.querySelector("#msg");
const reverseBtn = document.querySelector("#reverseBtn");
const countChars = document.querySelector("#count");
//const createEmoji = document.querySelector('#convertToEmoji');
const changeCase = document.querySelector("#changeCase");
const genRandomStr = document.querySelector("#generateRandomString");
const p = document.querySelector("#para");

const reverseString = (e) => {
  let inputStr = msg.value;
  e.preventDefault();

  let newString = "";
  for (let i = inputStr.length - 1; i >= 0; i--) {
    newString += inputStr[i];
  }

  print(newString);
};

const print = (reverseMsg) => {
  p.innerHTML = reverseMsg;
};

const changeTextCase = () => {
  let txt = msg.value;
  p.innerHTML = txt.toUpperCase();
};

const countInputChars = (e) => {
  e.preventDefault();
  let txt = msg.value;
  let count = txt.trim().split("").length;
  p.innerHTML = `The total number of characters: ${count}.`;
};

// Generates a new random string from a given message
const generateRandomStr = () => {
  let txt = msg.value;
  let newWord = new Array();

  for (let i = 0; i < txt.length; i++) {
    let randomIndex = Math.floor(Math.random() * txt.length);
    newWord.push(txt.charAt(randomIndex));
  }
  newWord = newWord.join("");
  p.innerHTML = newWord;
};

msg.addEventListener("change", reverseString);
reverseBtn.addEventListener("click", reverseString);
countChars.addEventListener("click", countInputChars);
changeCase.addEventListener("click", changeTextCase);
genRandomStr.addEventListener("click", generateRandomStr);
