var slider = document.getElementById("myRange");
var data1 = document.getElementById("data1");
var data2 = document.getElementById("data2");
var data3 = document.getElementById("data3");
var years = document.getElementById("years");
var sLetter = document.getElementById("sLetter");
data1.innerHTML = slider.value * 3.3;
data2.innerHTML = slider.value * 429;
data3.innerHTML = 0.008 * slider.value
years.innerHTML = slider.value;
if (slider.value > 1) {
  sLetter.innerHTML = "s";
}
else {
  sLetter.innerHTML = "";
}

slider.oninput = function() {
  data1.innerHTML = Math.round((this.value * 3.3) * 10) / 10;
  data2.innerHTML = Math.round((this.value * 429) * 10) / 10;
  data3.innerHTML = (0.008 * this.value).toFixed(3);
  years.innerHTML = this.value;
  if (this.value > 1) {
    sLetter.innerHTML = "s";
  }
  else {
    sLetter.innerHTML = "";
  }
}
