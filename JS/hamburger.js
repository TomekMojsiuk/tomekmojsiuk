$(function() {
 
 
    const nav = $('nav');
    console.log(nav);
    

 let hamburger = $(
  "<div class='hamburger'>" +
   "<div class='hamburger--line'></div>" +
   "<div class='hamburger--line'></div>" +
   "<div class='hamburger--line'></div>" +
   "</div>"
 );

 nav.prepend(hamburger);




});
