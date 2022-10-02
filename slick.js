$('.items').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            fade: true,
            arrows: true,
            prevArrow: '<span class="prev"> > </span>',
            nextArrow: '<span class="next"> < </span>',
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
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    fade: true,
    arrows: true,
    prevArrow: '<span class="prev"> > </span>',
    nextArrow: '<span class="next"> < </span>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }
    ]
});
    
	