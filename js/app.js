import loadingPage from "./loadingPage";
import navElement from "./nav";
import hamburgerElement from "./hamburger";
import socialMediaIconsElement from "./social-media-icons";
import {copyrightsElement, sectionAbout} from "./contentDisplayEffects";
import arrowDownElement from "./arrowGoDown";
import arrowUpElement from "./arrowGoToTop";
import portfolio from "./portfolio";

import "../SASS/Style.scss";

$(document).ready(function() {
 const loadingPage =
  "<div class='loading__page'><div class='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>";
 const body = $("body");

 body.append(loadingPage);

 setTimeout(() => {
  $(".loading__page").hide();
  navElement();
  hamburgerElement();
  arrowDownElement();
  arrowUpElement();
  socialMediaIconsElement();
  copyrightsElement();
sectionAbout();
  portfolio();
 }, 2000);
 
});
