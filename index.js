const msg = document.querySelector('#msg');
const reverseBtn = document.querySelector('#reverseBtn')
const countChars = document.querySelector('#count')
const p = document.querySelector('#para')



const reverseString=(e)=> {
  let inputStr = e.target.value;
  e.preventDefault();
 
  let newString = '';
   for(let i = inputStr.length-1; i >= 0; i--) {
     newString += inputStr[i]
   }
   
   print(newString)
   changeTextCase(newString)
}

const print = (reverseMsg) => {
  p.textContent += reverseMsg
}

const changeTextCase = (txt) => {
  let randomindex = Math.floor(Math.random() * txt.length);
  txt.charAt(randomindex).toUpperCase();
}


const countInputChars = (e) => {
  e.preventDefault()
  let inputStr = e.target.value;
  // let chars = inputStr.length
  console.log(inputStr)
}


msg.addEventListener('change', reverseString);
reverseBtn.addEventListener('click', reverseString)
countChars.addEventListener('click', countInputChars)