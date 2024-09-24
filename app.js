const nameInput = document.getElementById("name");
const cardNumberInput = document.getElementById("card-number");
const dateFirstInput = [...document.getElementsByClassName("first")];
const dateSecondInput = [...document.getElementsByClassName("second")];
const cvcInput = document.getElementById("cvc");
const confirmInput = document.getElementById("confirm");
const nameBlankError = document.getElementById("name-blank-error");
const cardNumberBlankError = document.getElementById("card-number-blank-error");
const cardNumberError = document.getElementById("card-number-error");
const dateBlankError = document.getElementById("date-blank-error");
const cvcBlankError = document.getElementById("cvc-blank-error");
const userContainer = [...document.getElementsByClassName("user-container")];
const successDiv = [...document.getElementsByClassName("success")];
const continueDiv = document.getElementById("continue");

let nameValue = "";
let cardNumberValue = "";
let dateFirstValue = 0;
let dateSecondValue = 0;
let cvcValue = "";

nameInput.addEventListener("input", (event) => {
  nameValue = event.target.value;

  if (nameValue.trim().length > 0) {
    nameInput.style.outlineColor = "#610595";
  }
});

cardNumberInput.addEventListener("input", (event) => {
  cardNumberValue = event.target.value;

  if (/^(?:\d\s?){16}$/.test(cardNumberValue.replace(/\s/g, ""))) {
    cardNumberInput.style.outlineColor = "#610595";
  } else {
    cardNumberInput.style.outlineColor = "#ff5050";
  }
});

dateFirstInput.forEach((input) => {
  input.addEventListener("input", (event) => {
    dateFirstValue = event.target.value;

    if (dateFirstValue >= 1 && dateFirstValue <= 31) {
      input.style.outlineColor = "#610595";
    } else {
      input.style.outlineColor = "#ff5050";
    }
  });
});

dateSecondInput.forEach((input) => {
  input.addEventListener("input", (event) => {
    dateSecondValue = event.target.value;

    if (dateSecondValue >= 1 && dateSecondValue <= 12) {
      input.style.outlineColor = "#610595";
    } else {
      input.style.outlineColor = "#ff5050";
    }
  });
});

cvcInput.addEventListener("input", (event) => {
  cvcValue = event.target.value;

  if (cvcValue.length === 3) {
    cvcInput.style.outlineColor = "#610595";
  } else {
    cvcInput.style.outlineColor = "#ff5050";
  }
});

confirmInput.addEventListener("click", (event) => {
  event.preventDefault();

  nameBlankError.style.display = "none";
  cardNumberBlankError.style.display = "none";
  dateBlankError.style.display = "none";
  cvcBlankError.style.display = "none";
  cardNumberError.style.display = "none";

  if (nameValue === "") {
    nameBlankError.style.display = "block";
  }

  if (cardNumberValue === "") {
    cardNumberBlankError.style.display = "block";
  }

  if (!/^\d+$/.test(cardNumberValue) && cardNumberValue.length > 0) {
    cardNumberError.style.display = "block";
  }

  if (!dateFirstValue || !dateSecondValue) {
    dateBlankError.style.display = "block";
  }

  if (cvcValue === "") {
    cvcBlankError.style.display = "block";
  }

  if (
    nameValue.length > 0 &&
    /^(?:\d\s?){16}$/.test(cardNumberValue.replace(/\s/g, "")) &&
    dateSecondValue >= 1 &&
    dateSecondValue <= 31 &&
    dateSecondValue >= 1 &&
    dateSecondValue <= 12 &&
    cvcValue.length === 3
  ) {
    userContainer.forEach((div) => {
      div.style.display = "none";
    });

    successDiv.forEach((div) => {
      div.style.display = "flex";
    });
  }

  confirmInput.style.marginTop = "20px";
});

continueDiv.addEventListener("click", (event) => {
  window.location.reload();
});
