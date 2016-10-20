// Intialize Lettering JS
$('h1').lettering();
// Make Backstretch Go!!
$.backstretch('/img/bg.jpeg');
// Activate Masonry
$('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 350
});