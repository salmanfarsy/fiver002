$('.items').slick({
    slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            arrows: true,
            prevArrow: '<span class="prev"> < </span>',
            nextArrow: '<span class="next"> > </span>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true
                    }
                }
            ]
        });
        $('.items2').slick({
            slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: false,
                    arrows: true,
                    prevArrow: '<span class="prev"> < </span>',
                    nextArrow: '<span class="next"> > </span>',
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: true
                            }
                        }
                    ]
                });
    
	