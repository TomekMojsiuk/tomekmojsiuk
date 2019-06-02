const copyrightsElement = () => {
 const copyrightsTop = $("header").find(".copyrights");
 const copyrightsBottom = $("footer").find(".copyrights");
 console.log(copyrightsTop);

 if (window.matchMedia("(max-width: 640px)").matches) {
  copyrightsTop.hide();
 } else {
  copyrightsBottom.hide();
 }

 window.addEventListener("scroll", function() {
  if (window.pageYOffset >= 500) {
   copyrightsTop.addClass("display");
  } else {
   copyrightsTop.removeClass("display");
  }
 });
};

export default copyrightsElement;
