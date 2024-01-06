document.getElementById("scroll").addEventListener("mouseover", function () {
  document.getElementById("scroll").style.overflowY = "scroll";
  document.getElementById("scroll").style.paddingRight = "0px";
});
document.getElementById("scroll").addEventListener("mouseout", function () {
  document.getElementById("scroll").style.overflowY = "hidden";
  document.getElementById("scroll").style.paddingRight = "5px";
});
