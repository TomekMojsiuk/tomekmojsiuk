const hamburgerElement = () => {
 //Create hamburger
 const nav = $("nav");
 let hamburger = $(
  "<div class='hamburger'>" +
   "<div class='hamburger__line'></div>" +
   "<div class='hamburger__line'></div>" +
   "<div class='hamburger__line'></div>" +
   "</div>"
 );

 nav.prepend(hamburger);
 const mainNavList = $(".nav__list");

 //Toggle mobile-nav on click
 hamburger.on("click", function() {
  mainNavList.toggle();
 });

 

};

export default hamburgerElement;
