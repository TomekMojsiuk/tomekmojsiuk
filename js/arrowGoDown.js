const arrowDownElement = () => {
 const nav = $("nav");

 const createArrowDown = $("<div class='arrow--down'></div>");
 nav.append(createArrowDown);

 const arrowDown = $(".arrow--down");

 //Display arrowDown

 window.addEventListener("scroll", function() {
  if (window.pageYOffset >= 500) {
   arrowDown.css("display", "none");
  } else {
   arrowDown.css("display", "block");
  }
 });

 arrowDown.on("click", function() {
  $("body, html").animate(
   {
    scrollTop: $("#about").offset().top
   },
   600
  );
 });
};

export default arrowDownElement;
