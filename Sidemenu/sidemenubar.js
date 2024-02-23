let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchbtn = document.querySelector(".bx-search");
btn.onclick = function () {
  sidebar.classList.toggle("active");
};
searchbtn.onclick = function () {
  sidebar.classList.toggle("active");
};
//
//Text Animation
const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2"),
};

// The strings to morph between. You can change these to anything you want!
// const texts = ["Why", "is", "this", "so", "satisfying", "to", "watch?"];
const texts = ["Side", "Menu", "Bar"];

// Controls the speed of morphing.
const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }

  setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
  // fraction = Math.cos(fraction * Math.PI) / -2 + .5;

  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

// Animation loop, which is called every frame.
function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++;
    }

    doMorph();
  } else {
    doCooldown();
  }
}

function colorsfun() {
  const colors = [
    "orange",
    "aqua",
    "lime",
    "skyblue",
    "purple",
    "violet",
    "yellow",
    "blue",
    "teal",
  ];
  const random = Math.floor(Math.random() * colors.length);
  const random2 = Math.floor(Math.random() * colors.length);
  text1.style.color = colors[random];
  text2.style.color = colors[random2];
// filter: drop-shadow(1px 1px 5px aqua);
}
setInterval(() => {
  colorsfun();
}, 1000);
animate();
