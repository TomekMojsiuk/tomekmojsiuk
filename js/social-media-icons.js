import { desktopBreakPoint } from "./variables";

const socialMediaIconsElement = () => {
 //Social media icons
 const socialMediaIcons = $(".social__media__icons");
 const linkedin = $(".linkedin");
 const github = $(".github");
 const email = $(".email");

 linkedin.on("click", function() {
  window.open("https://www.linkedin.com/in/tomasz-mojsiuk/");
 });

 github.on("click", function() {
  window.open("https://github.com/TomekMojsiuk");
 });

 email.on("click", function() {
  $("body, html").animate(
   {
    scrollTop: $("#contact").offset().top
   },
   600
  );
 });

 const pageOffset = () => {
  $(window).on("scroll", function() {
   if (window.innerWidth > desktopBreakPoint) {
    if (window.pageYOffset > 450) {
     socialMediaIcons.addClass("sticky__icons--add");
    } else {
     socialMediaIcons.removeClass("sticky__icons--add");
    }
   } else {
    socialMediaIcons.removeClass("sticky__icons--add");
   }
  });
 };
 pageOffset();

};

export default socialMediaIconsElement;
