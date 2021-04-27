var frame = 0;
var frames = ["T","Th","The","The A","The Al","The Alb","The Albe","The Albed","The Albedo","The Albedo E","The Albedo Ef","The Albedo Eff","The Albedo Effe","The Albedo Effec","The Albedo Effect","The Albedo Effect","The Albedo Effect","The Albedo Effect","The Albedo Effect","The Albedo Effect","The Albedo Effect","The Albedo Effect","The Albedo Effect","The Albedo Effect","he Albedo Effect","e Albedo Effect","Albedo Effect","lbedo Effect","bedo Effect","edo Effect","do Effect","o Effect","Effect", "ffect", "fect", "ect", "ct", "t", "M", "Ma", "Mad", "Made", "Made B", "Made By", "Made By B", "Made By Be", "Made By Ben","Made By Ben","Made By Ben","Made By Ben","Made By Ben","Made By Ben","Made By Ben","Made By Ben","Made By Ben","Made By Ben","Made By Ben","de By Ben", "e By Ben", "By Ben","y Ben", "Ben", "en", "n"]

animateTitle();

function animateTitle() {
  document.title = frames[frame];
  frame++;
  if (frame > frames.length - 1) {
    frame = 0;
  }
  setTimeout(function () {animateTitle()}, 100);
}
