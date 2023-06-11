"use strict";
/*
let rangeInputRed = document.getElementById("red");
let rangeInputGreen = document.getElementById("green");
let rangeInputBlue = document.getElementById("blue");

let redCurrentValue = rangeInputRed.addEventListener(
  "change",
  () => {
    changeColor(redCurrentValue, greenCurrentValue, blueCurrentValue);
    return document.getElementById("red").value;
  },
  false
);

let greenCurrentValue = rangeInputGreen.addEventListener(
  "change",
  () => {
    changeColor(redCurrentValue, greenCurrentValue, blueCurrentValue);
    return document.getElementById("green").value;
  },
  false
);

let blueCurrentValue = rangeInputBlue.addEventListener(
  "change",
  () => {
    changeColor(redCurrentValue, greenCurrentValue, blueCurrentValue);
    return document.getElementById("blue").value;
  },
  false
);

function changeColor(r, g, b) {
  const color =
    "#" + rangeValueToHex(r) + rangeValueToHex(g) + rangeValueToHex(b);
  document.body.style.backgroundColor = color;
  //document.body.style.backgroundColor = # " + r + "," + g + "," + b + ";
  console.log("sdgnf");
}
function rangeValueToHex(value) {
  value = Number.parseInt(value);
  return ("0" + value.toString(16)).substr(-2);
}

*/

document.addEventListener("input", () => {
  let rangeInputRed = document.getElementById("red");
  let rangeInputGreen = document.getElementById("green");
  let rangeInputBlue = document.getElementById("blue");

  colorChange(
    rangeInputRed.valueAsNumber,
    rangeInputGreen.valueAsNumber,
    rangeInputBlue.valueAsNumber
  );
});

function colorChange(red, green, blue) {
  document.body.style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";
}
