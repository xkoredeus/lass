$(function() {
  $('.fil-slider').owlCarousel({
      nav: true,
      items: 1,
      loop: false,
      dots: false,
      smartSpeed: 800,
      navText: ["<svg width='7' height='12' viewBox='0 0 7 12' xmlns='http://www.w3.org/2000/svg'><path d='M6 1L1 6L6 11' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>", "<svg width='7' height='12' viewBox='0 0 7 12' xmlns='http://www.w3.org/2000/svg'><path d='M1 11L6 6L0.999999 1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>"],
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
        600 : {
            items: 2
        },
        900 : {
            items: 3
        },
        1200 : {
            items: 4
        }
      }
  });
  $('.sale__in').owlCarousel({
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
        600 : {
            items: 2
        },
        1200 : {
            items: 3
        }
      }
  });
  $('.trust__list').owlCarousel({
    nav: true,
    navText: ["<svg width='7' height='12' viewBox='0 0 7 12' xmlns='http://www.w3.org/2000/svg'><path d='M6 1L1 6L6 11' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>", "<svg width='7' height='12' viewBox='0 0 7 12' xmlns='http://www.w3.org/2000/svg'><path d='M1 11L6 6L0.999999 1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>"],
    autoplay: true,
    loop: true,
    smartSpeed: 700,
    margin: 20,
    dots: false,
    responsive : {
      0   : {
          items: 1
      },
      380 : {
          items: 2,
      },
      600 : {
          items: 3,
      },
      800 : {
          items: 4,
      },
      1200 : {
          items: 5
      }
    }
  });
  $('.rev__list').owlCarousel({
    nav: true,
    navText: ["<svg width='7' height='12' viewBox='0 0 7 12' xmlns='http://www.w3.org/2000/svg'><path d='M6 1L1 6L6 11' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>", "<svg width='7' height='12' viewBox='0 0 7 12' xmlns='http://www.w3.org/2000/svg'><path d='M1 11L6 6L0.999999 1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>"],
    autoplay: true,
    loop: true,
    smartSpeed: 700,
    margin: 20,
    dots: false,
    responsive : {
      0   : {
          items: 1
      },
      380 : {
          items: 2,
      },
      600 : {
          items: 3,
      },
      800 : {
          items: 4,
      },
      1200 : {
          items: 5
      }
    }
  });
  //map
  $(document).ready(function () {
    var myMap;

    ymaps.ready(init);
    function init(){
      myMap = new ymaps.Map("map", {
          center: [55.7270,37.6382],
          globalPixelCenter: [54,35],
          zoom: 16,
          // scrollZoom: false,
          controls: ["typeSelector"],
      });
      myMap.behaviors.disable('drag');
      myMap.behaviors.disable('scrollZoom'); 
      var placemarks = [
          {
              coords: [55.726639069021054,37.645959],
              icon: 'img/baloon.svg',
              icon_size: [160, 114],
              icon_offset: [-80, -114], // -50% ширины, -100% высоты от точки привязки (левый верхний угол)
          }
      ];

      placemarks.forEach(function(item){
          var obj = new ymaps.Placemark(
              item.coords,
              {},
              {
                  iconLayout: 'default#image',
                  iconImageHref: item.icon,
                  iconImageSize: item.icon_size,
                  iconImageOffset: item.icon_offset,
              }
          );
          myMap.geoObjects.add(obj);
      });
    };
  });
  // btn top
  var top_show = 450; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 400; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('.btn_top').show();
      else $('.btn_top').hide();
    });
    $('.btn_top').click(function (e) { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      e.preventDefault();
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });
  //input type number
  $( '.quantity' ).on( 'click', '.quantity-minus, .quantity-plus', function (e) {
    e.preventDefault();
  var input = $( this ).siblings( '.quantity-num' );
    if ( (input.val() > 1) && ($( this ).hasClass( 'quantity-minus' ) ) ) {
        input.val( +input.val() - 1 );
    } else if ( $( this ).hasClass( 'quantity-plus' ) ) {
      input.val( +input.val() + 1 );
    };
  });
  // Самописный placeholder
  $(function () {
  var placeholderText = [
    'Xerox Phaser 3010',
    'NV Print MLT-D111L',
    'EasyPrint LH-18A',
    'Solution Print SP-S-111L'
  ];
    var $pls = $('.banner__search-input');
    $pls.placeholderTypewriter({
      text: placeholderText,
      delay: 150,
      pause: 1500,
    });
  });
  //ссыль на поиск пхп
  //https://misha.blog/wordpress/drop-down-jquery-search.html
  $(function (){
    $('.banner__search-input')
      .focus(function(){
        if($(this).val() == 'privet') {
          $(this).val('');
        } else {
          $('.banner__search-res').slideDown();
        }
        $(this).addClass('blured');
      })
      .blur(function(){
        if($(this).hasClass('blured')){
          $('.banner__search-res').slideUp();
          if($(this).val() == ''){
            $(this).val('');
          }
        }
      })
      .mouseout(function(){
        $(this).addClass('blured');
      })
      .mouseover(function(){
        $(this).removeClass('blured');
      });
  })

  //card slider
  var sync1 = $('.card__slider-top');
  var sync2 = $('.card__slider-bot');

  var thumbnailItemClass = '.owl-item';

  var slides = sync1.owlCarousel({
    startPosition: 0,
    items:1,
    loop:false,
    margin:10,
    nav: false,
    navText: ["<img src='img/slider__arrow_prev.svg'>", "<img src='img/slider__arrow_next.svg'>"],
    dots: false,
    smartSpeed: 700,
    autoplay:false,
    autoplayTimeout:6000,
    autoplayHoverPause:false,
  }).on('changed.owl.carousel', syncPosition);

  function syncPosition(el) {
    $owl_slider = $(this).data('owl.carousel');
    var loop = $owl_slider.options.loop;

    if(loop){
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);
      if(current < 0) {
          current = count;
      }
      if(current > count) {
          current = 0;
      }
    }else{
      var current = el.item.index;
    }

    var owl_thumbnail = sync2.data('owl.carousel');
    var itemClass = "." + owl_thumbnail.options.itemClass;


    var thumbnailCurrentItem = sync2
    .find(itemClass)
    .removeClass("synced")
    .eq(current);

    thumbnailCurrentItem.addClass('synced');

    if (!thumbnailCurrentItem.hasClass('active')) {
      var duration = 300;
      sync2.trigger('to.owl.carousel',[current, duration, true]);
    }   
  }
  var thumbs = sync2.owlCarousel({
    startPosition: 0,
    items:3,
    loop:false,
    margin: 15,
    autoplay:false,
    nav: false,
    dots: false,
    onInitialized: function (e) {
      var thumbnailCurrentItem =  $(e.target).find(thumbnailItemClass).eq(this._current);
      thumbnailCurrentItem.addClass('synced');
    },
  })
  .on('click', thumbnailItemClass, function(e) {
      e.preventDefault();
      var duration = 300;
      var itemIndex =  $(e.target).parents(thumbnailItemClass).index();
      sync1.trigger('to.owl.carousel',[itemIndex, duration, true]);
  }).on("changed.owl.carousel", function (el) {
    var number = el.item.index;
    $owl_slider = sync1.data('owl.carousel');
    $owl_slider.to(number, 100, true);
  });
  $('.card__info-test').hover(function(){
    $(this).find('.card__info-pop-wrp').slideToggle(30);
  });
  $('.card__prop').hover(function(){
    $(this).find('.card__prop-pop-wrp').slideToggle(30);
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
  if ( $(window).width() < 1200 ) {
    $('.banner__test-list').removeClass('row').addClass('owl-carousel');
    $('.banner__test-item-wrp').removeClass('col-xl-3 col-sm-6 mb-5 mb-xl-3');
    $('.banner__test-list').owlCarousel({
      nav: false,
      autoplay: true,
      loop: true,
      smartSpeed: 700,
      margin: 20,
      dots: true,
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        600 : {
            items: 2
        },
        1200 : {
            items: 3
        }
      }
    });
    $('.part').removeClass('d-flex').addClass('owl-carousel');
    $('.part').owlCarousel({
      nav: false,
      autoplay: true,
      loop: true,
      smartSpeed: 700,
      margin: 20,
      dots: true,
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 2
        },
        600 : {
            items: 4
        },
        1200 : {
            items: 5
        }
      }
    });
    $('.test__list').removeClass('row').addClass('owl-carousel');
    $('.test__item-wrp').removeClass('col-xl-4');
    $('.test__list').owlCarousel({
      nav: false,
      autoplay: true,
      loop: true,
      smartSpeed: 700,
      margin: 20,
      dots: true,
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1,
            autoHeight: true,
        },
        1200 : {
            items: 3
        }
      }
    });
    $('.ben__list').removeClass('row').addClass('owl-carousel');
    $('.ben__item-wrp').removeClass('col-xl-4');
    $('.ben__list').owlCarousel({
      nav: false,
      autoplay: true,
      loop: true,
      smartSpeed: 700,
      margin: 20,
      dots: true,
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1,
            autoHeight: true,
        },
        1200 : {
            items: 3
        }
      }
    });
    $("#menu").mmenu({
      extensions : [ "position-bottom", "listview-50", "fx-listitems-drop", "border-offset" ],
      autoHeight : false,
      navbar: { title: "Меню" }
    });
    $('.header_mob__search-btn').on('click', function(e) {
      $('html').toggleClass('fixed');
      // $(this).toggleClass('active');
      $('.search_mob').toggleClass('active');
    });
    $('.search_mob__close').on('click', function(e) {
      $('html').toggleClass('fixed');
      $('.search_mob').toggleClass('active');
    });
    //footer dropdown
    $('.footer__link').hide();
    $('.footer__ttl').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('active').parent('div').find('.footer__link').slideToggle();
    });
  };
});