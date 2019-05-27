$(document).ready(function() {
 const mainContainer = $(".main__container");
 console.log(mainContainer);

 const arrowUp = $("<div class='arrow--up'></div>");

 mainContainer.append(arrowUp);

 const arrow = $(".arrow--up");

  arrow.on("click", function() {

   $("body, html").animate(
    {
     scrollTop: $("header").offset().top
    },
    600
   );
  });
});
