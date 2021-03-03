$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<3;i++) {
    next=next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});

new WOW().init();

// loader
  var loader = function() {
    setTimeout(function() { 
      if($('#ftco-loader').length > 0) {
        $('#ftco-loader').removeClass('show');
      }
    }, 1);
  };
  loader();

// Main Navigation
$( '.hamburger-menu' ).on( 'click', function() {
    $(this).toggleClass('open');
    $('.site-navigation').toggleClass('show');
});

//Sticky
$(function () {
    $(".sticky").sticky({
        topSpacing: 90,
        minHeight: 768,
        zIndex: 2,
        stopper: "#YourStopperId"

    });
});


// scroll
var scrollWindow = function() {
  $(window).scroll(function(){
    var $w = $(this),
        st = $w.scrollTop(),
        navbar = $('.ftco_navbar'),
        sd = $('.js-scroll-wrap');

    if (st > 150) {
      if ( !navbar.hasClass('scrolled') ) {
        navbar.addClass('scrolled');	
      }
    } 
    if (st < 150) {
      if ( navbar.hasClass('scrolled') ) {
        navbar.removeClass('scrolled sleep');
      }
    } 
    if ( st > 350 ) {
      if ( !navbar.hasClass('awake') ) {
        navbar.addClass('awake');	
      }
      
      if(sd.length > 0) {
        sd.addClass('sleep');
      }
    }
    if ( st < 350 ) {
      if ( navbar.hasClass('awake') ) {
        navbar.removeClass('awake');
        navbar.addClass('sleep');
      }
      if(sd.length > 0) {
        sd.removeClass('sleep');
      }
    }
  });
};
scrollWindow();

var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
    BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
    iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
    Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
    Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
    any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};