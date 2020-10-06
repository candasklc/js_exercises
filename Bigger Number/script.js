let firstNumber = Math.floor(Math.random()*100);
let secondNumber = Math.floor(Math.random()*100);

document.getElementById("first").innerHTML = firstNumber;
document.getElementById("second").innerHTML = secondNumber;
document.getElementById("higherone").innerHTML = Math.max(firstNumber, secondNumber);