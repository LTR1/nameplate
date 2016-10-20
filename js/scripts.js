// Intialize Lettering JS
$('h1').lettering();
// Make Backstretch Go!!
$.backstretch('https://raw.githubusercontent.com/LTR1/nameplate/gh-pages/img/bg.jpeg');
// Activate Masonry
$('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 350
});