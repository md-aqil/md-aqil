
import { Application } from 'https://unpkg.com/@splinetool/runtime';

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    // Load Spline scene
    app.load('https://prod.spline.design/ezb1nsuygN-UZlZg/scene.splinecode', {
        onLoad: () => {
            // Access the scene after it's loaded
            const splineObject = app.scene.getObjectByName('avatar01');
            // Now you can perform operations with splineObject
        },
    });

    // 967c3bc0-c102-42f8-a7d4-142bc194fdb2
   

    gsap.to(splineObject.position, {
      x: 200,  // Adjust the target position as needed
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: '+=100%',  // Adjust the end position based on your scroll range
          scrub: 1,  // Scrub makes the animation follow the scroll speed
      },
  });

});

// starter js
$('body').scrollspy({ target: '#navbar-example2' })

MicroModal.init();
Splitting(); 
ScrollOut({
  once:true,
  cssProps: {
    visibleY: true,
    viewportY: true
  },
});

Splitting();

setTimeout(()=>{ 
  
  ScrollOut({
    targets: '[data-scroll]',
    once:true,
    cssProps: {
      viewportY: true,
      // visibleY: true
    }
  }).update();
},100);

window.scrollTo(0,0);

  
var mySwiper = new Swiper('.swiper-container.hero-banner', {
  effect: 'coverflow',
	grabCursor: true,
  centeredSlides: true,
  loop:true,
  slidesPerView: "auto",
  centeredSlides: true,
      slideToClickedSlide:true,
      spaceBetween: 0,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
	// coverflowEffect: {
	//   rotate: 50,
	//   stretch: 0,
	//   depth: 100,
	//   modifier: 1,
	//   slideShadows : true,
	// },
	coverflowEffect: {
        rotate: -3,
        stretch: 2,
        depth: 50,
        modifier: 10,
        slideShadows : true,
    },

  
	//   	coverflowEffect: {
	//   rotate: 50,
	//   stretch: 50,
	//   depth: 0,
	//   modifier: 1,
	//   slideShadows : true,
  // },
  
});



var swiper = new Swiper('.swiper-loop', {
  loop: true,
  autoplay: {
    delay: 1,
  },
  freeMode: true,
  speed: 5000,
  slidesPerView: 6,
  spaceBetween: 0,
  breakpoints: {
    1400: {
        slidesPerView: 7,
        spaceBetween: 50,
        centeredSlides: true,
     },
     320: {
        slidesPerView: 4,
        spaceBetween: 0,
     },
   }
   
});

$(".swiper-loop").hover(function () {
  (this).swiper.autoplay.stop();
}, function () {
  (this).swiper.autoplay.start();
});

$('.click-me').click(function () {
	$('.drop-menu').toggleClass('open');
	
})

$('.drop-menu li').each(function() {
var delay = $(this).index() * 100 + 'ms';

$(this).css({
	'-webkit-transition-delay': delay,
	'-moz-transition-delay': delay,
	'-o-transition-delay': delay,
	'transition-delay': delay
});                  
});

  

  
  $('.drop').click(function (e) {
   
    
	$(this).toggleClass('open').siblings().removeClass('open');
})

$('.drop-menu li').each(function() {
var delay = $(this).index() * 100 + 'ms';

$(this).css({
	'-webkit-transition-delay': delay,
	'-moz-transition-delay': delay,
	'-o-transition-delay': delay,
	'transition-delay': delay
});                  
});

$('.accordian .accordian-title').click(function() {
	$(this).parent('li').toggleClass('active');
	$(this).parents('li').find('.ac-detail-item').slideToggle();
});



ScrollOut({
  targets: ".sequence-row",
  onShown: function(el) {
    $('.sequence').each(function(el) {
      time = $(this).parent().attr('data-delay');
      if(time === undefined){
          time = 200;
       };
      var delay = $(this).index() * time + 'ms';
      $(this).css({
        '-webkit-transition-delay': delay,
        '-moz-transition-delay': delay,
        '-o-transition-delay': delay,
        'transition-delay': delay,
        'animation-delay' : delay
    
      });  
      });
  },
  onHidden: function(el) {
    delay = $(this).index() * 0 + 'ms';
  }
});



ScrollOut({
  targets: ".brz-animation",
  onShown: function(el) {
    $('.brz-columns').each(function(el) {
      time = $(this).parents('.brz-animation').attr('data-delay');
      if(time === undefined){
          time = 200;
       };

      var delay = $(this).index() * time + 'ms';
      
      $(this).css({
        '-webkit-transition-delay': delay,
        '-moz-transition-delay': delay,
        '-o-transition-delay': delay,
        'transition-delay': delay,
        'animation-delay' : delay
    
      });  
    
      });
    
      
  },
  onHidden: function(el) {
    delay = $(this).index() * 0 + 'ms';
  }
});



  

var technologies = new Swiper('#technologies', {
  slidesPerView: 2,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
 
    768: {
      slidesPerView: 2  ,
    },
    1024: {

      slidesPerView: 6,
    
    },
  }
  
});





ScrollOut({

  targets: ".animation-row",

  onShown: function(el) {
    $('.animation-row ' + child).each(function(el) {
      
     $(this).addClass('animation-child');
     
      time = $(this).parent().attr('data-delay');

      if(time === undefined){
          time = 200;
       };


      var delay = $(this).index() * time + 'ms';
      
      $(this).css({
        '-webkit-transition-delay': delay,
        '-moz-transition-delay': delay,
        '-o-transition-delay': delay,
        'transition-delay': delay,
        'animation-delay' : delay
    
      });  
    
      });
    
      
  },

  onHidden: function(el) {
   
    delay = $(this).index() * 0 + 'ms';
  }
});


$(window).scroll(function(){
  var sticky = $('.sticky-header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});



$(window).scroll(function(){
  var sticky = $('.aside_menu'),
      scroll = $(window).scrollTop();

  if (scroll >= 700) sticky.addClass('show');
  else sticky.removeClass('show');

});

var galleryThumbs = new Swiper('.gallery-thumbs', {
	effect: 'coverflow',
	grabCursor: true,
  centeredSlides: true,
  loop:true,
  slidesPerView: '2',
	// coverflowEffect: {
	//   rotate: 50,
	//   stretch: 0,
	//   depth: 100,
	//   modifier: 1,
	//   slideShadows : true,
	// },
	// coverflowEffect: {
  //       rotate: 0,
  //       stretch: 0,
  //       depth: 50,
  //       modifier: 6,
  //       slideShadows : false,
  //   },
  
	  	coverflowEffect: {
	  rotate: 50,
	  stretch: 50,
	  depth: 0,
	  modifier: 1,
	  slideShadows : true,
  },
  
  });
  
  
var galleryTop = new Swiper('.swiper-container.testimonial', {
  slidesPerView: 1,
	speed: 400,
  spaceBetween: 50,
  grabCursor: false,
  allowTouchMove:false,
	autoplay: {
	  delay: 5000,
	  disableOnInteraction: false,
	},
	direction: 'vertical',
	pagination: {
	  clickable: true,
	  el: '.swiper-pagination',
    type: 'bullets',
    
	},
	thumbs: {
		swiper: galleryThumbs
	  }
  });
  
  
var rotationThumbs = new Swiper('.rotationThumbs', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
  slidesPerView: '2',
	// coverflowEffect: {
	//   rotate: 50,
	//   stretch: 0,
	//   depth: 100,
	//   modifier: 1,
	//   slideShadows : true,
	// },
	coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 6,
        slideShadows : false,
	  },
	  
  });
  // Gallery 
  var testimonialsRotation = new Swiper('.swiper-container.testimonials-rotation', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 50,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    direction: 'vertical',
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
      type: 'bullets',
    },
    thumbs: {
      swiper: rotationThumbs
      }
    });
    
  $(document).ready(function() {
    $('ul#filter a').click(function() {
      $(this).parent('li').addClass('active').siblings().removeClass('active');
      var filterName = $(this).text().toLowerCase().replace(' ', '-');
  
      if (filterName == "all") {
        $('ul#portfolio li.hidden').fadeIn('slow').removeClass('hidden');
      } 
      else {
        $('ul#portfolio li').each(function() { 
          if(!$(this).hasClass(filterName)){
   $(this).fadeOut('normal').addClass('hidden');              
          }
  else {
    $(this).fadeIn('normal').removeClass('hidden');
  }
        })
      }
     return(false); 
    })
  
  })

  $('a.page').click(function(){
    $(this).parent('li').addClass('active').siblings('li').removeClass('active');
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});

var swiper = new Swiper('.swiper-container.swiperHero', {
  speed: 600,
  parallax: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


var swiperZoom = new Swiper('.swiper-container.testi', {

  grabCursor: true,
  centeredSlides: true,
  slidesPerView: '3',
    spaceBetween: 0,

  // loop:true,
  //  autoplay: {
  //   delay: 1000,
  //   disableOnInteraction: false,
  // },     

  effect: 'coverflow',
  keyboard:true,
 
    coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 10,
    slideShadows : false,
  },
  
});


swiperZoom.on('slideChange', function () {
  var index = this.activeIndex;


  $('.team-info .team-info-item').removeClass('active').eq(this.activeIndex).addClass('active')
});

$('.slideNext').click(function(argument) {

    swiperZoom.slideNext();

})
$('.slidePrev').click(function(argument) {
    
      swiperZoom.slidePrev();

  })



(function(d,c) {
  var b = d.body.appendChild(d.createElement('div')),
      f=b.appendChild(d.createElement('iframe'));
      b.style.display='none';f.src="";
  f.onload = function() {
      var fw=f.contentWindow,
      fd=f.contentDocument,
      s=fd.body.appendChild(fd.createElement('script'));
      fw.widget={frame:f,container:b,config:c};s.src='https://app.bigradar.io/widget.js';
  };
  return b;
})(document, {
  app_id: 'n7XJsBqxlluD2RB_Gnz6-G_I',
  // name: '<name>',
  // email: '<email>',
});

var swiperMobile = new Swiper('.swiper-container.swiper-full-mobile', {
  slidesPerView: 5,
  spaceBetween: 50,
  slideToClickedSlide: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
    autoplay: {
      delay: 1000,
    },
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
   1400: {
       slidesPerView: 5,
       spaceBetween: 50,
       centeredSlides: true,
    },
    320: {
       slidesPerView: 1,
       spaceBetween: 0,
    },
  }

});



