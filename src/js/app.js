import "./arrowGoToTop";
import "./nav";
import "./hamburger";
import "./social-media-icons";
import "./copyrights";

import "../SASS/Style.scss";

$(document).ready(function() {
 const mainNav = $(".nav");
 console.log(mainNav);

 const title = $(".title");
 title.hide();
 if (window.matchMedia("(min-width: 640px)").matches) {
//   title.show();


 }

});
