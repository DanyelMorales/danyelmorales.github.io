
      (function ($) {"use strict";
      
      $(function () {
        var header = $(".start-style");
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
    
          if (scroll >= 10) {
            header.removeClass('start-style').addClass("scroll-on");
          } else {
            header.removeClass("scroll-on").addClass('start-style');
          }
        });
      });
    
      //Animation
    
      $(document).ready(function () {

          $.fn.isMobileDevice = function() {
              let firstCheck = window
                  .matchMedia("only screen and (max-width: 760px)").matches;
              if(!firstCheck){
                  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
                      .test(navigator.userAgent);
              }
              return true;
          }

          if($.fn.isMobileDevice()){
              executeMobileLogic($);
          }

        $('body.hero-anime').removeClass('hero-anime');

          $("#greeting").randomGreeting("#greeting-lang");
      });
    
      //Menu On Hover
    
      $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
        if ($(window).width() > 750) {
          var _d = $(e.target).closest('.nav-item');_d.addClass('show');
          setTimeout(function () {
            _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
          }, 1);
        }
      });
    
    
    
    })(jQuery);

// Blank Target External Links
$(document.links).filter(function() {
return this.hostname != window.location.hostname;
}).attr('target', '_blank');