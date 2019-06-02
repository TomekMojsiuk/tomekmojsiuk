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

 //Toggle mobile-nav on click
 if (window.matchMedia("(max-width: 640px)").matches) {
  const mainNavList = $(".nav__list");

  mainNavList.hide();

  hamburger.on("click", function() {
   mainNavList.toggle();
  });
 }
};

export default hamburgerElement;
