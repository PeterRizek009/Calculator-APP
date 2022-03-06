function openNav() {
  document.getElementById("myNav").style.display = "block";
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
  document.getElementById("myNav").style.width = "0%";
}

let numbers = document.querySelectorAll(".buttons #number");
let operators = document.querySelectorAll(".buttons #operator");
let display = document.getElementById("input");
let clear = document.getElementById("clear");
let equal = document.getElementById("orange");

let resultDisplayed = false;

console.log(operators);
// function when click on button the html element will show in the display

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    var inputString = display.innerHTML;
    var lastChar = inputString[inputString.length - 1];

    if (resultDisplayed === false) {
      display.innerHTML += e.target.innerHTML;
    } else if (
      resultDisplayed === true &&
      (lastChar === "+" ||
        lastChar === "x" ||
        lastChar === "-" ||
        lastChar === "÷")
    ) {
      resultDisplayed = false;
      display.innerHTML += e.target.innerHTML;
    } else {
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    var inputString = display.innerHTML;
    var lastChar = inputString[inputString.length - 1];

    if (
      lastChar === "+" ||
      lastChar === "x" ||
      lastChar === "-" ||
      lastChar === "÷"
    ) {
      let newString =
        inputString.substring(0, inputString.length - 1) + e.target.innerHTML;
      display.innerHTML = newString;
    } else if (inputString.length === 0) {
      alert("Error");
    } else {
      display.innerHTML += e.target.innerHTML;
    }
  });
});

equal.addEventListener("click", () => {
  let inputString = display.innerHTML;

  var nums = inputString.split(/\+|\-|\×|\÷/g);

  var operas = inputString.replace(/[0-9]|\./g, "").split("");

  var divide = operas.indexOf("÷");
  while (divide != -1) {
    nums.splice(divide, 2, nums[divide] / nums[divide + 1]);
    operas.splice(divide, 1);
    divide = operas.indexOf("÷");
  }

  var multiply = operas.indexOf("×");
  while (multiply != -1) {
    nums.splice(multiply, 2, nums[multiply] * nums[multiply + 1]);
    operas.splice(multiply, 1);
    multiply = operas.indexOf("×");
  }

  var subtract = operas.indexOf("-");
  while (subtract != -1) {
    nums.splice(subtract, 2, nums[subtract] - nums[subtract + 1]);
    operas.splice(subtract, 1);
    subtract = operas.indexOf("×");
  }
  var add = operas.indexOf("+");
  while (add != -1) {
    nums.splice(add, 2, parseFloat(nums[add]) + parseFloat(nums[add + 1]));
    operas.splice(add, 1);
    add = operas.indexOf("×");
  }
  var add = operas.indexOf("+");
  while (add != -1) {
    nums.splice(add, 2, parseFloat(nums[add]) + parseFloat(nums[add + 1]));
    operas.splice(add, 1);
    add = operas.indexOf("×");
  }
 
  
  

  console.log(`${nums} ,  ${operas}`);
  input.innerHTML = nums[0];

  resultDisplayed = true;  
});
// Clear button  make html element equal "" nothing
clear.addEventListener("click", () => {
  display.innerHTML = "";
});
