const mq = window.matchMedia("(max-width: 400px)");

if (mq.matches) {
    $('li.submenu a[href="#"]').click(
        function (e) {
            e.preventDefault();
            $(this).next().toggle();
            return false;
        });



$('#big-slider').slick({
    arrows: false,
    infinite: true,
    autoplay: true,
  autoplaySpeed: 2000,
    slidesToShow: 1,
    adaptiveHeight: true

});

$('#small-slider').slick({
  
  slidesToShow: 2,
  slidesToScroll: 1
});


$('#seo-slider').slick();
    }


$('#big-slider').slick({
    arrows: false,
    infinite: true,
    autoplay: true,
  autoplaySpeed: 2000,
    slidesToShow: 1,
    adaptiveHeight: true

});

$('#small-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1
});


$('#seo-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});