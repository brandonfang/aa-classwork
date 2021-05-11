const MovingObject = require('./movingObject');

// const mo = new MovingObject({
//   pos: [80, 80],
//   vel: [10, 10],
//   radius: 50,
//   color: "#00FF00",
// });
// window.MovingObject = mo;

document.addEventListener("DOMContentLoaded", (event) => {
  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext("2d");
  window.context = ctx;
  console.log("DOM fully loaded and parsed");
});

