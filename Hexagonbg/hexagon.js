var curser = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
  var X = e.clientX;
  var Y = e.clientY;
  curser.style.left = X + "px";
  curser.style.top = Y + "px";
});
