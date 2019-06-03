import { desktopBreakPoint } from "./variables";

const copyrightsElement = () => {
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

export default copyrightsElement;
