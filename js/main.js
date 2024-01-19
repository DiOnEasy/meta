document.querySelector(".header__button button").onclick = () => openModal();
document.querySelector(".bonus__button button").onclick = () => openModal();
let overlay = document.querySelector(".overlay");
let registrationForm = document.querySelector(".registration-form");
let closeRegistration = registrationForm.querySelector(".x");
let getBonus = document.querySelector(".get-bonus");
let bonusItems = document.querySelectorAll(".get-bonus__items img");
let bonusReceived = document.querySelector(".bonus-received");
let thanks = document.querySelector(".thanks-form");
let body = document.querySelector("body");
let forms = document.querySelectorAll(".registration-form__inputs form");
function openModal() {
  overlay.classList.remove("none");

  if (document.cookie.indexOf("warning") != -1) {
    bonusReceived.classList.remove("none");
  } else {
    registrationForm.classList.remove("none");
  }
}

closeRegistration.onclick = () => {
  registrationForm.classList.add("none");
  getBonus.classList.remove("none");
};

bonusItems.forEach((item) => {
  item.onclick = () => openGetBonus();
});

function openGetBonus() {
  getBonus.classList.add("none");
  bonusReceived.classList.remove("none");
  document.cookie = "warning=true; max-age=2592000; path=/";
}

getBonus.querySelector(".x").onclick = () => {
  overlay.classList.add("none");
  getBonus.classList.add("none");
};

bonusReceived.querySelector(".x").onclick = () => {
  overlay.classList.add("none");
  bonusReceived.classList.add("none");
};

forms.forEach((form) => {
  form.onsubmit = (event) => openThanks(event);
});

function openThanks(event) {
  event.preventDefault(); // Предотвратить отправку формы (перезагрузку страницы)
  registrationForm.classList.add("none");
  thanks.classList.remove("none");
  bonusReceived.classList.add("none");
}

thanks.querySelector(".x").onclick = () => closeThanks();

function closeThanks() {
  overlay.classList.add("none");
  thanks.classList.add("none");
}

// -------------

let result = document.querySelector("#result");
let sum = document.querySelector("#sum");
let days = document.querySelector("#days");

sum.oninput = () => calculate();
days.oninput = () => calculate();

function calculate() {
  if (days.value <= 0 || days.value == "" || sum.value < 0) {
    result.value = 0;
  } else {
    calculateValue = ((sum.value * 18.5) / days.value).toFixed(1);
    let [integerPart, decimalPart] = calculateValue.split(".");
    result.value = `${integerPart}.(${decimalPart})`;
    sum.value = sum.value;
  }
}

let burger = document.querySelector(".burger");

document.querySelectorAll('.links a').forEach(link => link.onclick = () => openMobileMenu())

burger.onclick = () => openMobileMenu();

function openMobileMenu() {
  if(window.innerWidth <= 1024){
    document
    .querySelector(".header__nav-links")
    .classList.toggle("links__opened");
  document.querySelector(".links").classList.toggle("flex");
  document
    .querySelector(".burger__line:nth-child(1)")
    .classList.toggle("mobile-menu__line_rotated");
  document.querySelector(".burger__line:nth-child(2)").classList.toggle("none");

  document
    .querySelector(".burger__line:nth-child(3)")
    .classList.toggle("mobile-menu__line_other-rotated");

    document.querySelector('body').classList.toggle('hidden')
  }
 
}
