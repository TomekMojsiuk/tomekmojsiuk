$(document).ready(function() {
 const mainContainer = $(".main__container");

 const arrowUp = $("<div class='arrow--up'></div>");
 mainContainer.append(arrowUp);

 const arrow = $(".arrow--up");

 //Display arrowUp
 arrow.hide();
 window.addEventListener("scroll", function() {
  if (window.pageYOffset >= 500) {
   arrowUp.css("display", "initial");
  } else {
   arrowUp.css("display", "none");
  }
 });

 arrow.on("click", function() {
  $("body, html").animate(
   {
    scrollTop: $("header").offset().top
   },
   600
  );
 });
});
