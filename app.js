'use strict';

let addBtn = document.querySelector(".add");
let minusBtn = document.querySelector('.minus');
let multBtn = document.querySelector('.mult');
let divBtn = document.querySelector('.div');
let resetBtn = document.querySelector('.reset');


function add(){
    let outputResult = document.querySelector('#result');
    let input1 = document.querySelector('#inputValue1').value;
    let input2 = document.querySelector('#inputValue2').value;
    let output = Number(input1) + Number(input2)
    if(input1<1 || input2<1){
        alert('Both values must be inputed')
    } else {outputResult.innerText = output;}
}
addBtn.addEventListener('click' , add)


function minus(){
    let outputResult = document.querySelector('#result');
    let input1 = document.querySelector('#inputValue1').value;
    let input2 = document.querySelector('#inputValue2').value;
    let output = Number(input1) - Number(input2)
    if(input1<1 || input2<1){
        alert('Both values must be inputed')
    } else {outputResult.innerText = output;}}
minusBtn.addEventListener('click' , minus)


function mult(){
    let outputResult = document.querySelector('#result');
    let input1 = document.querySelector('#inputValue1').value;
    let input2 = document.querySelector('#inputValue2').value;
    let output = Number(input1) * Number(input2)
    if(input1<1 || input2<1){
        alert('Both values must be inputed')
    } else {outputResult.innerText = output;}}
multBtn.addEventListener('click' , mult)


function div(){
    let outputResult = document.querySelector('#result');
    let input1 = document.querySelector('#inputValue1').value;
    let input2 = document.querySelector('#inputValue2').value;
    let output = Number(input1) / Number(input2)
    if(input1<1 || input2<1){
        alert('Both values must be inputed')
    } else {outputResult.innerText = output;}}
divBtn.addEventListener('click' , div)


function reset(){
    let outputResult = document.querySelector('#result');
    let input1 = document.querySelector('#inputValue1').value;
    let input2 = document.querySelector('#inputValue2').value;
    let output = Number(input1) + Number(input2)
    outputResult.innerText = null;
}
resetBtn.addEventListener('click' , reset)


let currentYear = new Date()
let footerYear = document.querySelector('.date')
footerYear.innerText = currentYear.getFullYear()
