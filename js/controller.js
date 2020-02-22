
 var swiperMobile = new Swiper('.swiper-container.swiper-full-mobile', {
  slidesPerView: 6,
  spaceBetween: 20,
  slideToClickedSlide: true,
  // freeMode:true,
  
  // centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // loop: true,
  //   autoplay: {
  //     delay: 100000,
  //   },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 80,
    modifier: 4,
    slideShadows: true,
  },
  breakpoints: {
    640: {
      centeredSlides: true,
      freemode: false,
      slidesPerView: 3,
      spaceBetween: 0,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 60,
        modifier: 3,
        slideShadows: true,
      },
    },
    320: {
      spaceBetween: 0,
      centeredSlides: true,
      freemode: false,
      slidesPerView: 3,

    }
  }

});





var colors = [
  '--dark-green',
  '--light-brown',
  '--light-red',
  '--light-teal',
  '--light-gray',
];

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var swiperverticle = new Swiper('.swiper-container.verticle-animation', {
  speed: 600,
  parallax: true,
  direction: 'vertical',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination-line',
    clickable: true,

  },
  //  thumbs: {
  //    swiper: galleryThumbs
  //  }

});

swiperverticle.on('slideChange', function () {
  var index = this.activeIndex;
  $('.halfbox, .tag-box').css({
    background: 'var(' + colors[index % colors.length] + ')'
  });

  $('.team-info .team-info-item').removeClass('active').eq(this.activeIndex).addClass('active')
});



var swiperverticle = new Swiper('.swiper-container.swiper-front', {
  spaceBetween: 10,
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 2000,
  },
  cubeEffect: {
    slideShadows: true,
  },
  320: {
    autoplay: {
      delay: 1000,
    },

  },

  pagination: {
    el: '.swiper-pagination-line',
    clickable: true,
  },
});


var swiper = new Swiper('.swiper-loop', {
  loop: true,
  autoplay: {
    delay: 1,
  },
  freeMode: true,
  speed: 5000,
  slidesPerView: 5,
  spaceBetween: 20,
});

$(".swiper-loop").hover(function () {
  (this).swiper.autoplay.stop();
}, function () {
  (this).swiper.autoplay.start();
});

$(document).ready(function () {

  $(".filter-button").click(function () {
    $(this).addClass('filter-active').siblings().removeClass('filter-active');
    var value = $(this).attr('data-filter');

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $('.filter').show('1000');
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000');

    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");

});


  Splitting(); 

ScrollOut({
  cssProps: {
    visibleY: true,
    viewportY: true
  },
  targets: ".scrollable-pane",
});

ScrollOut();
 
