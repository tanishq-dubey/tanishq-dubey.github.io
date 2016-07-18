// Sticky Header
$('.main_h').addClass('sticky');

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// Navigation Scroll - ljepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

jQuery(document).ready(function ($) {
  
  var $container = $('.grid').masonry({
    columnWidth: 280,
    itemSelector: '.item',
    isFitWidth: true
  });
  
});

$('.card').click(function(){
  $(this).toggleClass('active');
});

jQuery(document).ready(function() {

  if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    jQuery(".collapse").hide();
  } else {
    jQuery(".collapse").show();
  }
  
  jQuery(".heading").click(function()
  {
    jQuery(this).next(".collapse").slideToggle(450);
  });
  
});