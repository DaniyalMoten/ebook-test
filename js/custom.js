
  (function ($) {

  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();

      scrollToDiv(elWrapped,header_height);
      return false;

      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;

        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

  })(window.jQuery);
  var items = document.querySelectorAll(".timeline li");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

    // More lenient viewport detection - element is considered in view if any part is visible
    return (
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= windowHeight &&
      rect.left <= windowWidth
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        if(!items[i].classList.contains("in-view")){
          items[i].classList.add("in-view");
        }
      }
    }
  }

  // Initialize timeline items as visible on load
  function initializeTimeline() {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.add("in-view");
    }
  }

  window.addEventListener("load", function() {
    initializeTimeline();
    callbackFunc();
  });
  window.addEventListener("scroll", callbackFunc);


