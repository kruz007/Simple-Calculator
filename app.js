"use strict";

let btnAdd = document.querySelector(".add");
let btnMinus = document.querySelector(".minus");
let btnMult = document.querySelector(".mult");
let btnDiv = document.querySelector(".div");
let btnReset = document.querySelector(".reset");
let outputResult = document.querySelector("#result");

function add() {
  let input1 = document.querySelector("#inputValue1").value;
  let input2 = document.querySelector("#inputValue2").value;
  let output = Number(input1) + Number(input2);

  if (input1 === "" || input2 === "") {
    alert("Both values must be inputed");
  } else {
    outputResult.innerText = output;
  }
}
btnAdd.addEventListener("click", add);

function minus() {
  let input1 = document.querySelector("#inputValue1").value;
  let input2 = document.querySelector("#inputValue2").value;
  let output = Number(input1) - Number(input2);
  if (input1 === "" || input2 === "") {
    alert("Both values must be inputed");
  } else {
    outputResult.innerText = output;
  }
}
btnMinus.addEventListener("click", minus);

function mult() {
  let input1 = document.querySelector("#inputValue1").value;
  let input2 = document.querySelector("#inputValue2").value;
  let output = Number(input1) * Number(input2);
  if (input1 === "" || input2 === "") {
    alert("Both values must be inputed");
  } else {
    outputResult.innerText = output;
  }
}
btnMult.addEventListener("click", mult);

function div() {
  let input1 = document.querySelector("#inputValue1").value;
  let input2 = document.querySelector("#inputValue2").value;
  let output = Number(input1) / Number(input2);
  if (input1 === "" || input2 === "") {
    alert("Both values must be inputed");
  } else {
    outputResult.innerText = output;
  }
}
btnDiv.addEventListener("click", div);

function reset() {
  outputResult.innerText = 0;
}
btnReset.addEventListener("click", reset);

let date = new Date();
let year = date.getFullYear();
document.querySelector(".date").innerText = year;
