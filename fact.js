/// color theme switch dark mode light mode

let theme = document.querySelector(".wholepage");

let modeSwitch = document.querySelector(".dark");

modeSwitch.addEventListener("click", switchTheme);

function switchTheme() {
  if (theme.style.backgroundColor === "white") {
    theme.style.backgroundColor = "black";
    theme.style.color = "white";
    info.style.backgroundColor = "rgb(83, 82, 82)";
    info.style.color = "white";
    san.style.backgroundColor = "rgb(83, 82, 82)";
    san.style.color = "white";
    kc.style.backgroundColor = "rgb(83, 82, 82)";
    kc.style.color = "white";
    sanmascot.style.backgroundColor = "rgb(83, 82, 82)";
    sanmascot.style.color = "white";
    kcmascot.style.backgroundColor = "rgb(83, 82, 82)";
    kcmascot.style.color = "white";
  } else {
    theme.style.backgroundColor = "white";
    theme.style.color = "black";
    info.style.backgroundColor = "lightblue";
    info.style.color = "black";
    san.style.backgroundColor = "lightblue";
    san.style.color = "black";
    kc.style.backgroundColor = "lightblue";
    kc.style.color = "black";
    sanmascot.style.backgroundColor = "lightblue";
    sanmascot.style.color = "black";
    kcmascot.style.backgroundColor = "lightblue";
    kcmascot.style.color = "black";
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

///show and hide mascot info for Kansas City
//show it first
let wolf = document.querySelector(".wolf");
wolf.addEventListener("click", showWolf);

let kcmascot = document.querySelector(".kanMascot");

function showWolf() {
  kcmascot.style.display = "block";
}

///now hide it
let closeKanMascot = document.querySelector(".closeKanMascot");
closeKanMascot.addEventListener("click", hideKanMascot);

function hideKanMascot() {
  kcmascot.style.display = "none";
}

/// show hide mascot info for SanFrancisco

let sam = document.querySelector(".sam");
sam.addEventListener("click", showSam);

let sanmascot = document.querySelector(".sanMascot");

function showSam() {
  sanmascot.style.display = "block";
}

let closeSanMascot = document.querySelector(".closeSanMascot");
closeSanMascot.addEventListener("click", hideSanMascot);

function hideSanMascot() {
  sanmascot.style.display = "none";
}
