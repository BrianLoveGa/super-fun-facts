/// color theme switch dark mode light mode

let theme = document.querySelector(".wholepage");

let modeSwitch = document.querySelector(".dark");

modeSwitch.addEventListener("click", switchTheme);

function switchTheme() {
  if (theme.style.backgroundColor === "white") {
    theme.style.backgroundColor = "black";
    theme.style.color = "white";
  } else {
    theme.style.backgroundColor = "white";
    theme.style.color = "black";
  }
}

/// show and hide general facts

let info = document.querySelector(".general");

const foot = document.querySelector(".football");
foot.addEventListener("click", showGen);

function showGen() {
  info.style.display = "block";
}

const closeGen = document.querySelector(".closeGen");
closeGen.addEventListener("click", hideGen);

function hideGen() {
  info.style.display = "none";
}

/// show and hide 49 ers facts
let nine = document.querySelector(".niners");

let san = document.querySelector(".sanfran");

let closesan = document.querySelector(".closeSan");

nine.addEventListener("click", showSan);

function showSan() {
  san.style.display = "block";
}

closesan.addEventListener("click", hideSan);

function hideSan() {
  san.style.display = "none";
  console.log("hide san");
}

/// show and hide Chiefs facts

let chief = document.querySelector(".chiefs");
let kc = document.querySelector(".kc");
let closeKan = document.querySelector(".closeKan");

chief.addEventListener("click", showKan);

function showKan() {
  kc.style.display = "block";
}

closeKan.addEventListener("click", hideKan);

function hideKan() {
  kc.style.display = "none";
}
