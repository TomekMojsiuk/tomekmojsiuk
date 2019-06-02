const socialMediaIconsElement = () => {
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
  $("body, html").animate(
   {
    scrollTop: $("#contact").offset().top
   },
   600
  );
 });

 if (window.matchMedia("(min-width: 640px)").matches) {
  const socialMediaIcons = $(".social__media__icons");

  $(window).on("scroll", function() {
   if (window.pageYOffset > 450) {
    socialMediaIcons.addClass("sticky__icons--add");
   } else {
    socialMediaIcons.removeClass("sticky__icons--add");
   }
  });
 }
};

export default socialMediaIconsElement;
