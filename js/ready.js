$(document).ready(function() {

var container = document.querySelector('#container');
var msnry;
// initialize Masonry after all images have loaded
imagesLoaded( container, function() {
  msnry = new Masonry( container, {
  // options
  
  "isFitWidth": true,
  itemSelector: '.block'
} );
});



});

