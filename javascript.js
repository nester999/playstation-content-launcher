$(document).ready( function() {
  var numContentLauncherObjects = $('.content-container').length-1;
  var contentLauncherCarouselIndex = 1;
  var numNavbarObjects = $('.nav-content-container').length-1;
  console.log('numNavbarObjects: ', numNavbarObjects);
  var navbarCarouselIndex = 0;

  
  
  console.log('contentLauncherCarouselIndex: ', contentLauncherCarouselIndex);
  $('.content-container').eq(contentLauncherCarouselIndex).focus();

  $( ".content-container" ).on('keydown', function(event) {
    console.log('event: ', event.target);
    event.preventDefault();
    switch(event.keyCode) {
      case(13): // ENTER
        $('.actual-content-section').addClass('actual-content-focused');
        $('.menus-container').addClass('actual-content-focused');
        $('li.actual-content-container').focus();
        break;
      case(37): // <-
        if(contentLauncherCarouselIndex > 0) {
          contentLauncherCarouselIndex--;
          console.log('contentLauncherCarouselIndex <-', contentLauncherCarouselIndex);
          $('.content-container').eq(contentLauncherCarouselIndex).focus();
        } 
        break;
      case(38): // ^
        console.log('going up: ', navbarCarouselIndex);
        $('.menus-container').addClass('navbar-focused');
        $('.nav-content-container').eq(navbarCarouselIndex).focus();
        break;
      case(39): // ->
        if(contentLauncherCarouselIndex < numContentLauncherObjects) {
          contentLauncherCarouselIndex++;
          console.log('contentLauncherCarouselIndex ->', contentLauncherCarouselIndex);
          $('.content-container').eq(contentLauncherCarouselIndex).focus();
        }
        
        break;
      default:
        break;
    }
    if(contentLauncherCarouselIndex !== 0)
    $('.content-launcher-container').css("transform","translate3d(" + ((contentLauncherCarouselIndex-1) * -145 ) + "px, 0px, 0px)");
  });
  
    $( ".nav-content-container" ).on('keydown', function(event) {
      event.preventDefault();
      switch(event.keyCode) {
        case(37): // <-
          if(navbarCarouselIndex > 0) {
            navbarCarouselIndex--;
            console.log('navbarCarouselIndex <-', navbarCarouselIndex);
            $('.nav-content-container').eq(navbarCarouselIndex).focus();
          }
          break;
        case(40): // v
           $('.menus-container').removeClass('navbar-focused');
          $('.content-container').eq(contentLauncherCarouselIndex).focus();
          break;
        case(39): // ->
          if(navbarCarouselIndex < numNavbarObjects) {
            navbarCarouselIndex++;
            console.log('navbarCarouselIndex ->', navbarCarouselIndex);
            $('.nav-content-container').eq(navbarCarouselIndex).focus();
          }
          break;
        default:
          break;
      }
  });
  
    $( ".actual-content-container" ).on('keydown', function(event) {
    console.log('event: ', event.target);
    event.preventDefault();
    switch(event.keyCode) {
      case(38): // ^
        $('.actual-content-section').removeClass('actual-content-focused');
        $('.menus-container').removeClass('actual-content-focused');
        $('.content-container').eq(contentLauncherCarouselIndex).focus();
        break;
      default:
        break;
    }
    if(contentLauncherCarouselIndex !== 0)
    $('.content-launcher-container').css("transform","translate3d(" + ((contentLauncherCarouselIndex-1) * -145 ) + "px, 0px, 0px)");
  });

  $(".content-container").on('focus', function() {
    
  });
  
});
