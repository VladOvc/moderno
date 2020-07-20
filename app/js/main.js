$(function(){
    $('.slider__inner').slick({
        asNavFor: '.slider__thumbs',
    });
    $('.slider__thumbs').slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider__inner',
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 961,
              settings: {
                slidesToShow: 4,
              }
            },
          ]
    });

    $('.header__menu-btn').on('click', function(){
        $('.header__menu > ul').slideToggle();
    });
});