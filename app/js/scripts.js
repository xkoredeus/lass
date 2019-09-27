$(function() {
  $('.fil-slider').owlCarousel({
      nav: true,
      items: 1,
      loop: false,
      dots: false,
      smartSpeed: 800,
      navText: ["<svg width='7' height='12' viewBox='0 0 7 12' xmlns='http://www.w3.org/2000/svg'><path d='M6 1L1 6L6 11' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>", "<svg width='7' height='12' viewBox='0 0 7 12' xmlns='http://www.w3.org/2000/svg'><path d='M1 11L6 6L0.999999 1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>"],
      // responsive : {
      //   0   : {
      //       items: 1
      //   },
      //   380 : {
      //       items: 1
      //   },
      //   480 : {
      //       items: 1
      //   },
      //   768 : {
      //       items: 3
      //   },
      //   1040 : {
      //       items: 4
      //   }
      // }
  });
  $('.hit__in').owlCarousel({
      nav: true,
      loop: false,
      dots: false,
      smartSpeed: 800,
      margin: 30,
      navText: ["<svg width='7' height='12' viewBox='0 0 7 12' xmlns='http://www.w3.org/2000/svg'><path d='M6 1L1 6L6 11' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>", "<svg width='7' height='12' viewBox='0 0 7 12' xmlns='http://www.w3.org/2000/svg'><path d='M1 11L6 6L0.999999 1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 1
        },
        768 : {
            items: 3
        },
        1040 : {
            items: 4
        }
      }
  });
  // tabs 
  if ( $(window).width() > 600 ) {
    $(document).ready(function () {
      $(".tabs__content-item:not(:first-child)").hide();
      $(".tabs__container div.tabs__content-item.active-tab").show();
      $('ul.tabs__list > li').click(function () {
        if (!($(this).hasClass('active'))) {
          var thisLi = $(this);
          var numLi = thisLi.index();
          thisLi.addClass('active').siblings().removeClass('active');
          thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
        }
      });
    });
  };
  if ( $(window).width() < 600 ) {
    $('.tabs-acc__btn').on('click', function(){
      $(this).toggleClass('active').siblings('.tabs-acc__cnt').slideToggle();
    })
  };
  //Закрываем AjaxForm popup после успешной отправки
  // $(document).on('af_complete', function(event,res) {
  //   if(res.success) parent.$.fancybox.close();
  // });
});