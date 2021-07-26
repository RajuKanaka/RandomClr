const pcolor = document.getElementById("color");
const letters = "0123456789ABCDEF";
function getRandomColor() {
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function setRandomColor() {
  const color = getRandomColor();
  document.body.style.backgroundColor = color;
  pcolor.textContent = color;
}
