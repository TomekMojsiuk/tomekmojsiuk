$(document).ready(function() {

    const navList = $('.nav__list');
    const navListItem = $('.nav__list__item>a');
    console.log(navListItem);

    navListItem.each(function () { 
       const navLink =  $(this).attr('href');
       
       $(this).on('click', function () {
        $('body, html').animate({
            scrollTop: $(navLink).offset().top
          }, 600); 

          if (window.matchMedia("(max-width: 640px)").matches) {
              navList.hide();
            }
        
       })
       
        console.log($(this).attr('href'));

    });

});

