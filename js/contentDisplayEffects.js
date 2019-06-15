import { desktopBreakPoint } from "./variables";

export const copyrightsElement = () => {
 const copyrightsTop = $("header").find(".copyrights");
 const copyrightsBottom = $("footer").find(".copyrights");

 const loadCopy = () => {
  if (window.innerWidth < desktopBreakPoint) {
   copyrightsTop.hide();
   copyrightsBottom.show();
  } else {
   copyrightsBottom.hide();
   copyrightsTop.show();
  }
 };

 const displayCopyOnResize = () => {
  $(window).resize(function() {
   loadCopy();
  });
 };

 const copyScrollBehavior = () => {
  $(window).on("scroll", function() {
   if (window.pageYOffset >= 500) {
    copyrightsTop.addClass("display");
   } else {
    copyrightsTop.removeClass("display");
   }
  });
 };

 loadCopy();
 displayCopyOnResize();
 copyScrollBehavior();
 
};

export const sectionAbout = () => {

    const header = $('#about').find('h2');
    console.log(header);

    $(window).on("scroll", function() {
     if (window.innerWidth > desktopBreakPoint) {
      if (window.pageYOffset > 700) {
       header.addClass("display");
      } else {
       socialMediaIcons.removeClass("sticky__icons--add");
      }
     } else {
      socialMediaIcons.removeClass("sticky__icons--add");
     }
    });


   };
