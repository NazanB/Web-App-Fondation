"use strict";
let rangeInputRed = document.getElementById("red");
let rangeInputGreen = document.getElementById("green");
let rangeInputBlue = document.getElementById("blue");

document.addEventListener("input", () => {
  UpdateDisplay(
    rangeInputRed.valueAsNumber,
    rangeInputGreen.valueAsNumber,
    rangeInputBlue.valueAsNumber
  );
});

function colorChange(red, green, blue) {
  document.body.style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";
}
function rangeValueToHex(value) {
  value = Number.parseInt(value);
  return value.toString(16).length < 2
    ? "0" + value.toString(16)
    : value.toString(16);
}

function UpdateDisplay(r, g, b) {
  colorChange(r, g, b);
  document.getElementById("color-value").innerHTML =
    "#" + rangeValueToHex(r) + rangeValueToHex(g) + rangeValueToHex(b);
}

UpdateDisplay(
  rangeInputRed.valueAsNumber,
  rangeInputGreen.valueAsNumber,
  rangeInputBlue.valueAsNumber
);
