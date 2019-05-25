$(document).ready(function() {

    //Create hamburger 
 const nav = $("nav");
 console.log(nav);

 let hamburger = $(
  "<div class='hamburger'>" +
   "<div class='hamburger--line'></div>" +
   "<div class='hamburger--line'></div>" +
   "<div class='hamburger--line'></div>" +
   "</div>"
 );

 nav.prepend(hamburger);

 //Toggle mobile-nav on click

 if (window.matchMedia("(max-width: 640px)").matches) {
   const mainNavList = $('.main--nav--list');
 mainNavList.hide();
    hamburger.on('click', function () {
      mainNavList.toggle();     
  })
    
 }
});
