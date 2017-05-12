$(document).ready( function() {
  var numContentLauncherObjects = $('.content-container').length-1;
  var contentLauncherCarouselIndex = 1;
  var numNavbarObjects = $('.nav-content-container').length-1;
  var navbarCarouselIndex = 0;
  var carouselSlideAmount = 145;
  
  $('.content-container').eq(contentLauncherCarouselIndex).focus(); // initial focus of element

  $( ".content-container" ).on('keydown', function(event) { // key events for content container
    event.preventDefault(); // keep window from scrolling
    switch(event.keyCode) {
      case(13): // ENTER
      case(40): // v
        $('.actual-content-section').addClass('actual-content-focused');
        $('.menus-container').addClass('actual-content-focused');
        setTimeout(() => {
          $('li.actual-content-container').focus();
        }, 300);
        break;
      case(37): // <-
        if(contentLauncherCarouselIndex > 0) {
          contentLauncherCarouselIndex--;
          $('.content-container').eq(contentLauncherCarouselIndex).focus();
        } 
        break;
      case(38): // ^
        $('.menus-container').addClass('navbar-focused');
        $('.actual-content-section').addClass('navbar-focused');
        setTimeout(() => {
          $('.nav-content-container').eq(navbarCarouselIndex).focus();
        }, 100);
        break;
      case(39): // ->
        if(contentLauncherCarouselIndex < numContentLauncherObjects) {
          contentLauncherCarouselIndex++;
          $('.content-container').eq(contentLauncherCarouselIndex).focus();
        }
        break;
      default:
        break;
    }
    if(contentLauncherCarouselIndex !== 0)
      $('.content-launcher-container').css("transform","translate3d(" + ((contentLauncherCarouselIndex-1) * -carouselSlideAmount ) + "px, 0px, 0px)");
  });
  
    $( ".nav-content-container" ).on('keydown', function(event) {
      event.preventDefault(); // keep window from scrolling
      switch(event.keyCode) {
        case(37): // <-
          if(navbarCarouselIndex > 0) {
            navbarCarouselIndex--;
            $('.nav-content-container').eq(navbarCarouselIndex).focus();
          }
          break;
        case(40): // v
          $('.menus-container').removeClass('navbar-focused');
          $('.actual-content-section').removeClass('navbar-focused');
          $('.content-container').eq(contentLauncherCarouselIndex).focus();
          break;
        case(39): // ->
          if(navbarCarouselIndex < numNavbarObjects) {
            navbarCarouselIndex++;
            $('.nav-content-container').eq(navbarCarouselIndex).focus();
          }
          break;
        default:
          break;
      }
  });
  
  $( ".actual-content-container" ).on('keydown', function(event) { // actual content keyboard function
    event.preventDefault();
    switch(event.keyCode) {
      case(38): // ^
        $('.actual-content-section').removeClass('actual-content-focused');
        $('.menus-container').removeClass('actual-content-focused');
        setTimeout(() => {
          $('.content-container').eq(contentLauncherCarouselIndex).focus();
        }, 100);
        break;
      default:
        break;
    }
    if(contentLauncherCarouselIndex !== 0) // slide carousel if not at the end
    $('.content-launcher-container').css("transform","translate3d(" + ((contentLauncherCarouselIndex-1) * -145 ) + "px, 0px, 0px)");
  });
});
