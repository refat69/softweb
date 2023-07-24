$('.img-main').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    dots:true,
    nextArrow:".next",
    prevArrow:".prev",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
