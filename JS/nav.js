$(document).ready(function() {
 // Nav list
 const navList = $(".nav__list");
 const navListItem = $(".nav__list__item>a");

 // Add function on click to nav links
 navListItem.each(function() {
  const navLink = $(this).attr("href");

  $(this).on("click", function() {
   $("body, html").animate(
    {
     scrollTop: $(navLink).offset().top
    },
    600
   );

   // Hide navlist on redirect in mobile version
   if (window.matchMedia("(max-width: 640px)").matches) {
    navList.hide();
   }
  });
 });


  if (window.matchMedia("(min-width: 640px)").matches) {
   
    console.log($(this));

   $(this).on("scroll", function() {
    if (window.pageYOffset > 450) {
     navList.addClass("sticky__nav--add");
    } else {
     navList.removeClass("sticky__nav--add");
    }
   });
  }

});
