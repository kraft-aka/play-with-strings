const msg = document.querySelector("#msg");
const errorMsg = document.querySelector('#error-msg');

// Buttons
const reverseBtn = document.querySelector("#reverseBtn");
const countChars = document.querySelector("#count");
//const createEmoji = document.querySelector('#convertToEmoji');
const changeCase = document.querySelector("#changeCase");
const genRandomStr = document.querySelector("#generateRandomString");
const toUnicodeBtn = document.querySelector("#toUnicode");
const changeStyleBtn = document.querySelector("#changeStyle");
const countWordsBtn = document.querySelector("#countWords");
const sendBtn = document.querySelector("#sendBtn");

// output paragraph
const p = document.querySelector("#para");

//modal 
let modalContainer = document.querySelector('#myModal');

const reverseString = (e) => {
  errorMsg.innerText = '';
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
  errorMsg.innerText = '';
  let txt = msg.value;
  p.innerHTML = txt.toUpperCase();
};

const countInputChars = (e) => {
  e.preventDefault();
  errorMsg.innerText = '';
  let txt = msg.value;
  let count = txt.replace(/ /g, "").split("").length;
  p.innerHTML = `The total number of characters: ${count}.`;
};

// Generates a new random string from a given message
const generateRandomStr = () => {
  errorMsg.innerText = '';
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
  errorMsg.innerText = '';
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
  errorMsg.innerText = '';
  e.preventDefault();
  p.innerHTML = msg.value;
  p.classList.add("change-class");
};

// count words
const countWords = () => {
  errorMsg.innerText = '';
  const str = msg.value;
  const newStr = str.replace(/\s+/g, " ").trim().split(" ").length;
  p.innerHTML = `You typed: ${newStr} words.`;
};

// send message
const sendMsg = (e) => {
  errorMsg.innerText = '';
  e.preventDefault();
  msg.value.length <= 0 ? errorMsg.innerText = 'Empty message can not be sent out! Please write something.' : showModal(msg.value);
  msg.value = "";
  p.innerHTML = '';
};

// show modal
const showModal=(txt) => {
  modalContainer.style.display = 'block';
  modalContent.innerText = msg.value;
  
}

// hide modal
const hideModal = () => {
  errorMsg.innerText = '';
  setTimeout(()=> {
    modalContainer.style.display = 'none';
  }, 1000);
}

// modal 
const modalDiv = document.createElement('div');
modalDiv.classList.add('modal-content');

// modal title
const modalTitle = document.createElement('h2');
modalTitle.innerText = 'Modal';

// modal content
const modalContent = document.createElement('p');

//close button
const modalCloseBtn = document.createElement('button');
modalCloseBtn.classList.add('modal-close');
modalCloseBtn.innerText = 'close';

modalDiv.appendChild(modalTitle);
modalDiv.appendChild(modalContent);
modalDiv.appendChild(modalCloseBtn);
modalContainer.appendChild(modalDiv);

// events
msg.addEventListener("change", reverseString);
reverseBtn.addEventListener("click", reverseString);
countChars.addEventListener("click", countInputChars);
changeCase.addEventListener("click", changeTextCase);
genRandomStr.addEventListener("click", generateRandomStr);
toUnicodeBtn.addEventListener("click", toUnicode);
changeStyleBtn.addEventListener("click", changeStyle);
countWordsBtn.addEventListener("click", countWords);
//sendBtn.addEventListener("click", sendMsg);
sendBtn.addEventListener('click', sendMsg);
modalCloseBtn.addEventListener('click', hideModal);
