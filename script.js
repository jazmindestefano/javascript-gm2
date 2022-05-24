import { addition, rest } from "/exercises.js";

const array = document.getElementById('array');
const number = document.getElementById('number');
const addBtn = document.getElementById('add');
const restBtn = document.getElementById('rest');
const result = document.getElementById('result');

let myArray = array.value;
let myNumber = number.value;

const addFunc = (e) => {
    e.preventDefault();
    result.innerHTML = 'El resultado es: ' + addition(myArray, myNumber);
}

const restFunc = (e) => {
    e.preventDefault();
    result.innerHTML = "El resultado es: " + rest(myArray, myNumber);
}

addBtn.addEventListener('click', addFunc);
restBtn.addEventListener('click', restFunc);




