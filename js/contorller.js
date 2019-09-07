 var swiperMobile = new Swiper('.swiper-container.swiper-full-mobile', {
      slidesPerView: 5,
      spaceBetween: 50,
      slideToClickedSlide:true,
      centeredSlides:true,
     pagination: {
        el: '.swiper-pagination',
        clickable: true,

      },

      loop:true,
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
        slideShadows : true,
      },



       breakpoints: {
            
            640: {
              centeredSlides:true,
              freemode:false,
              slidesPerView: 3,
              spaceBetween: 0,


               effect: 'coverflow',
      
              coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 60,
              modifier: 3,
              slideShadows : true,
            },



             
            },


            320: {
               spaceBetween: 0,
              centeredSlides:true,
              freemode:false,
              slidesPerView: 3,
             
            }
      }

    });