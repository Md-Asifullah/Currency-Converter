"use strict";
// Enter currency values here
let usdToRM = 4.42;
let usdToBDT = 92.96;

let baseCurrency = "";
let currency = "";

// Modal Functionalities

const helpBtn = document.querySelector(".help-button");
const XBtn = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// Update Rate Functionalities
const updateBtn = document.querySelector(".update-button");
const XBtn2 = document.querySelector(".updateRate-close");
const upDateRate = document.querySelector(".updateRate");
const usdToRMRate = document.querySelector(".usdToRMRate");
const usdToBDTRate = document.querySelector(".usdToBDTRate");
const btnSubmit = document.querySelector(".btnSubmit");
const btnReset = document.querySelector(".btnReset");
const rateUpdateMsg = document.querySelector(".rateUpdateMsg");

// Functions
function resetCurrency(cssClass) {
  document.querySelector(cssClass).textContent = 0.0;
}

function displayBlock(cssClass) {
  document.querySelector(cssClass).style.display = "block";
}

function displayNone(cssClass) {
  document.querySelector(cssClass).style.display = "none";
}

function btnUSDAction() {
  baseCurrency = "usd";
  document.querySelector(".money-usd").value = "";
  resetCurrency(".currency-us-2-myr");
  resetCurrency(".currency-us-2-bdt");
  displayBlock(".usd-converter");
  displayNone(".rm-converter");
  displayNone(".bdt-converter");
  displayNone(".enter-value");
}

function btnMYRAction() {
  baseCurrency = "myr";
  document.querySelector(".money-rm").value = "";
  resetCurrency(".currency-rm-2-usd");
  resetCurrency(".currency-rm-2-bdt");
  displayBlock(".rm-converter");
  displayNone(".usd-converter");
  displayNone(".bdt-converter");
  displayNone(".enter-value");
}

function btnBDTAction() {
  baseCurrency = "bdt";
  document.querySelector(".money-bdt").value = "";
  resetCurrency(".currency-bdt-2-usd");
  resetCurrency(".currency-bdt-2-rm");
  displayBlock(".bdt-converter");
  displayNone(".usd-converter");
  displayNone(".rm-converter");
  displayNone(".enter-value");
}

function convertFromUSD() {
  document.querySelector(".currency-us-2-myr").textContent = (
    currency * usdToRM
  ).toFixed(2);
  document.querySelector(".currency-us-2-bdt").textContent = (
    currency * usdToBDT
  ).toFixed(2);
}

function convertFromMYR() {
  document.querySelector(".currency-rm-2-usd").textContent = (
    currency *
    (1.0 / usdToRM)
  ).toFixed(2);
  document.querySelector(".currency-rm-2-bdt").textContent = (
    currency *
    (1.0 / usdToRM) *
    usdToBDT
  ).toFixed(2);
}

function convertFromBDT() {
  document.querySelector(".currency-bdt-2-usd").textContent = (
    currency *
    (1.0 / usdToBDT)
  ).toFixed(2);
  document.querySelector(".currency-bdt-2-rm").textContent = (
    currency *
    (1.0 / usdToBDT) *
    usdToRM
  ).toFixed(2);
}

function enterValueBlock() {
  document.querySelector(".enter-value").style.display = "block";
}

function currencyString() {
  enterValueBlock();
  document.querySelector(".message-enter-value").textContent =
    "Entered value is not a number or decimal";
}

function hideModal() {
  modal.classList.add("hidden");
  upDateRate.classList.add("hidden");
  overlay.classList.add("hidden");
}

function showModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function showUpdateRate() {
  upDateRate.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function hideUpdateRate() {
  upDateRate.classList.add("hidden");
  overlay.classList.add("hidden");
  rateUpdateMsg.classList.add("hidden");
}

function submitAction() {
  usdToRM = usdToRMRate.value;
  usdToBDT = usdToBDTRate.value;
  rateUpdateMsg.classList.remove("hidden");
}

function resetAction() {
  usdToRMRate.value = "";
  usdToBDTRate.value = "";
  rateUpdateMsg.classList.add("hidden");
}

// Main Logic

document.querySelector(".btn-usd").addEventListener("click", btnUSDAction);

document.querySelector(".btn-myr").addEventListener("click", btnMYRAction);

document.querySelector(".btn-bdt").addEventListener("click", btnBDTAction);
// USD
document.querySelector(".convert-usd").addEventListener("click", function () {
  if (baseCurrency == "usd") {
    currency = parseFloat(document.querySelector(".money-usd").value);
    if (currency == "") {
      enterValueBlock();
    } else if (isNaN(currency)) {
      currencyString();
    } else {
      convertFromUSD();
    }
  }
});
// RM
document.querySelector(".convert-rm").addEventListener("click", function () {
  if (baseCurrency == "myr") {
    currency = parseFloat(document.querySelector(".money-rm").value);
    if (currency == "") {
      enterValueBlock();
    } else if (isNaN(currency)) {
      currencyString();
    } else {
      convertFromMYR();
    }
  }
});
// BDT
document.querySelector(".convert-bdt").addEventListener("click", function () {
  if (baseCurrency == "bdt") {
    currency = parseFloat(document.querySelector(".money-bdt").value);
    if (currency == "") {
      enterValueBlock();
    } else if (isNaN(currency)) {
      currencyString();
    } else {
      convertFromBDT();
    }
  }
});

// Modal Logic

helpBtn.addEventListener("click", showModal);
XBtn.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);

document.addEventListener("keydown", function (e) {
  if (
    (e.key === "Escape" && !modal.classList.contains("hidden")) ||
    (e.key === "Escape" && !upDateRate.classList.contains("hidden"))
  ) {
    hideModal();
    hideUpdateRate();
    rateUpdateMsg.classList.add("hidden");
  }
});

// Update Rate Logic
updateBtn.addEventListener("click", showUpdateRate);
XBtn2.addEventListener("click", hideUpdateRate);
btnSubmit.addEventListener("click", submitAction);
btnReset.addEventListener("click", resetAction);
