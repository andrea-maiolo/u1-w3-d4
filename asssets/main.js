const mainTable = document.getElementById("mainTable");
const userTables = document.getElementById("userTables");
const btnRandom = document.getElementById("btn-random");
const numberExtracted = [];
const userSelectioForm = document.getElementById("userSelection");
const btnUserSelection = document.querySelector("#userSelection button");
const userInput = document.querySelector("#userSelection input");
const main = document.getElementsByTagName("main")[0];

//this let user set a number o tables max 5
const userTableSelection = function (e) {
  e.preventDefault();
  main.style.display = "block";
  userSelectioForm.style.display = "none";
  createUserTable(userInput.value);
};

//actual table creation
const createMainTable = function () {
  for (let i = 0; i < 90; i++) {
    const cellaMain = document.createElement("div");
    cellaMain.classList.add("cellaMain");
    cellaMain.innerText = i + 1;
    mainTable.appendChild(cellaMain);
  }
};

//user table creation
const createUserTable = function (inputNum) {
  //get how many tables the user wants to play with
  inputNum = parseInt(inputNum);
  for (let j = 1; j <= inputNum; j++) {
    let currentTable = document.createElement("div");
    currentTable.classList.add("userTable");
    for (let i = 0; i < 24; i++) {
      const cellaMain = document.createElement("div");
      cellaMain.classList.add("cellaMain");
      let randomUserNumbers = Math.floor(Math.random() * 90) + 1;
      cellaMain.innerText = randomUserNumbers;
      currentTable.appendChild(cellaMain);
    }
    userTables.appendChild(currentTable);
  }
};

//change bg for right cell
const bgChange = function (num) {
  const mainDivs = document.querySelectorAll(".cellaMain");
  mainDivs.forEach((cell) => {
    if (parseInt(cell.innerText) === num) {
      console.log(cell);
      cell.classList.add("selected");
    }
  });
};

//funzione per numero random
const generateRandomNumber = function () {
  const numberGenerated = Math.floor(Math.random() * 90) + 1;

  //check if number already used
  if (numberExtracted.includes(numberGenerated)) {
    generateRandomNumber();
  } else {
    numberExtracted.push(numberGenerated);
    bgChange(numberGenerated);
  }
};

//crea tabella e inizia eventi
window.addEventListener("DOMContentLoaded", function () {
  createMainTable();
  userSelectioForm.addEventListener("submit", userTableSelection);
  btnRandom.addEventListener("click", generateRandomNumber);
});
