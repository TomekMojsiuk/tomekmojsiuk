import { desktopBreakPoint } from "./variables";

const navElement = () => {
 // Nav list
 const navList = $(".nav__list");
 const navListItem = $(".nav__list__item>a");
const breakPoint = 740;
console.log(breakPoint);
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
  });
 });

 if (window.innerWidth < desktopBreakPoint) {
  navList.hide();
 } else {
  navList.show();
 }

 $(window).on("scroll", function() {
  if (window.innerWidth > desktopBreakPoint) {
   if (window.pageYOffset > 450) {
    navList.addClass("sticky__nav--add");
   } else {
    navList.removeClass("sticky__nav--add");
   }
  } else {
   navList.removeClass("sticky__nav--add");
  }
 });

 $(window).resize(function() {
  if (window.innerWidth < desktopBreakPoint) {
   navList.hide();
  } else {
   navList.show();
  }
 });
};

export default navElement;
