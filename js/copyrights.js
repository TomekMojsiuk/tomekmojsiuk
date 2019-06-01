$(document).ready(function() { 

const copyrightsTop = $('header').find('.copyrights');
const copyrightsBottom = $('footer').find('.copyrights');
console.log(copyrightsTop);

if (window.matchMedia("(max-width: 640px)").matches) {
    copyrightsTop.hide();
} else {
    copyrightsBottom.hide();
}


});
