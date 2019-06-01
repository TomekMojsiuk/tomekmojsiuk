$(document).ready(function() {
 const nav = $("nav");

 const arrowDOwn = $("<div class='arrow--down'></div>");
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
//TODO finish arrow scrolling to next section
 arrow.on("click", function() {
  $("body, html").animate(
   {
    scrollTop: $("abour").offset().top
   },
   600
  );
 });
});
