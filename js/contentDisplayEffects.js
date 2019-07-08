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
    copyrightsTop.addClass("displayCopyrights");
   } else {
    copyrightsTop.removeClass("displayCopyrights");
   }
  });
 };

 loadCopy();
 displayCopyOnResize();
 copyScrollBehavior();
};

export const sectionAbout = () => {
 const aboutHeader = $("#about").find("h2");
 const aboutContent = $("#about").find(".contentbox");
 const aboutTools = $("#about").find(".tech__box");

 $(window).on("scroll", function() {
  if (window.innerWidth > desktopBreakPoint) {
   if (window.pageYOffset > 700) {
    aboutHeader.addClass("display__H2");
    aboutContent.addClass("content__opacity");
    aboutTools.addClass("content__opacity");
   } else {
    aboutHeader.removeClass("display__H2");
    aboutContent.removeClass("content__opacity");
    aboutTools.removeClass("content__opacity");
   }
  }
 });
};

export const sectionPortfolio = () => {
 const portfolioHeader = $("#portfolio").find("h2");
 const portfolioProjects = $("#portfolio").find(".projets__box");

 $(window).on("scroll", function() {
  if (window.innerWidth > desktopBreakPoint) {
   if (window.pageYOffset > 1100) {
    portfolioHeader.addClass("display__H2");
    portfolioProjects.addClass("content__opacity");
   } else {
    portfolioHeader.removeClass("display__H2");
    portfolioProjects.removeClass("content__opacity");
   }
  }
 });
};

export const sectionContact = () => {
 const contactHeader = $("#contact").find("h2");
 const contactInfo = $("#contact").find(".contact__info");

 $(window).on("scroll", function() {
  if (window.innerWidth > desktopBreakPoint) {
   if (window.pageYOffset > 2400) {
    contactHeader.addClass("display__H2");
    contactInfo.addClass("content__opacity");
   } else {
    contactHeader.removeClass("display__H2");
    contactInfo.removeClass("content__opacity");
   }
  }
 });
};
