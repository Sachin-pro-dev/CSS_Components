const color = [
  "#2196f3",
  "linear-gradient(45deg, red,purple)",
  "linear-gradient(45deg, aqua,purple)",
  "linear-gradient(45deg, aqua,#000)",
  "linear-gradient(45deg, palegreen,aqua)",
  "aqua",
  "#e91e63",
  "#ffeb3b",
  "#74ff1d",
];

function createSquare() {
  const section = document.querySelector("section");
  const square = document.createElement("span");

  var size = Math.random() * 50;

  square.style.width = 100 + size + "px";
  square.style.height = 100 + size + "px";
  square.style.top = Math.random() * innerHeight + "px";
  square.style.left = Math.random() * innerWidth + "px";

  const bg = color[Math.floor(Math.random() * color.length)];
  // square.style.borderRadius = "50%";
  square.style.background = bg;
  section.appendChild(square);

  setTimeout(() => {
    square.remove();
  }, 5000);
}

// setInterval(createSquare, 150);
setInterval(createSquare, 1);
