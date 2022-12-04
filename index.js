const msg = document.querySelector("#msg");
const reverseBtn = document.querySelector("#reverseBtn");
const countChars = document.querySelector("#count");
//const createEmoji = document.querySelector('#convertToEmoji');
const changeCase = document.querySelector("#changeCase");
const genRandomStr = document.querySelector("#generateRandomString");
const toUnicodeBtn = document.querySelector("#toUnicode");
const changeStyleBtn = document.querySelector('#changeStyle');
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
  let count = txt.replace(/ /g,'').split("").length;
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

// Converts the strings to unicode
const toUnicode = () => {
  let str = msg.value;

  str = str
    .split("")
    .map((ch) => addZeros(ch.charCodeAt(0).toString(16)))
    .join("");
  p.innerHTML = str;
};

function addZeros(str) {
  return ("0000" + str).slice(-4);
}

// changes style of txt
const changeStyle = (e) => {
  e.preventDefault();
  
  p.innerHTML = msg.value;
  p.style.color = 'Red';
  p.style.backgroundColor = 'lightgrey'
  p.style.fontSize = '24px';
  p.style.fontWeight = '700'

}

msg.addEventListener("change", reverseString);
reverseBtn.addEventListener("click", reverseString);
countChars.addEventListener("click", countInputChars);
changeCase.addEventListener("click", changeTextCase);
genRandomStr.addEventListener("click", generateRandomStr);
toUnicodeBtn.addEventListener("click", toUnicode);
changeStyleBtn.addEventListener('click', changeStyle);

