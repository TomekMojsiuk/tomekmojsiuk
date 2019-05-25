$(document).ready(function() {
 //Social media icons

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

    $('body, html').animate({
        scrollTop: $(".contact").offset().top
      }, 600);
  
   });

});
