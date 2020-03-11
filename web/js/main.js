 
// slider
  $('.slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    infinite: true,
    autoplay: true,
    speed: 800,
    arrows: false,
    dots: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});

 $('.slider1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    autoplay: true,
    speed: 700,
    infinite: true,
    arrows: false,
    dots: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        speed: 700,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
      }
    }
  ]
});

//плавний перехід
    $("a").click(function () {
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top;
            if ($.browser) {
                $('body').animate({ scrollTop: destination }, 1100);
            } else {
                $('html').animate({ scrollTop: destination }, 1100);
            }
            return false; 
    });


//появлення стрілки вверх
    $(window).scroll(function(){
            var bo = $(this).scrollTop();
             
      if ( bo >= 800) {
        $("#updown").stop().animate({'opacity':'1'}, 500);
      };

          if ( bo < 800) {
            $("#updown").stop().animate({'opacity':'0'}, 500);
          };
    });

    //переміщення вверх сторінки
    $('#head').click(function() {
      $('html, body').animate({scrollTop: 0}, 500);
      return false;
    }); 
                    

