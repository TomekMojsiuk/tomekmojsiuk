import "./arrowGoToTop";
import "./nav";
import "./hamburger";
import "./social-media-icons";
import "./copyrights";

import "../SASS/Style.scss";

$(document).ready(function() {
 const loadingPage =
  "<div class='loading__page'><div class='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>";
 const body = $("body");

 body.append(loadingPage);

 setTimeout(() => {
  $(".loading__page").hide();
 }, 3000);

 const mainNav = $(".nav");
 console.log(mainNav);

 const title = $(".title");
 title.hide();
 if (window.matchMedia("(min-width: 640px)").matches) {
  //   title.show();
 }
});
