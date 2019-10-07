// anchors --------------------

 
$(function(){
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      var sc = $(this).attr("href"),
          dn = $(sc).offset().top;      
      $('html, body').animate({scrollTop: dn}, 1000);
    });
  });

// burger menu --------------------

$(function(){
    $('.menu-button').on('click', function() {
       $('.main-nav__list').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });

    });
    $('.main-nav__item').on('click', function() {
        $('.main-nav__list').slideToggle(100, function(){
             if( $(this).css('display') === "none"){
                 $(this).removeAttr('style');
             }
        });
 
     });

});

// portfolio filter --------------------


$(function() {
    $('.portfolio__list').isotope({
        itemSelector: '.portfolio__item',
        percentPosition: true,
        masonry: {
            columnWidth: '.portfolio__item'
        }
    });
    $('.filter__item').click(function(){
        $('.filter__item').removeClass('active');
        $(this).addClass('active');
    
        var selector = $(this).attr('data-filter');
        $('.portfolio__list').isotope({
            filter: selector
        });
        return false;
    });
});

// portfolio modal --------------------

$(function() {
    $('.portfolio__link').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
			verticalFit: true
		},
        zoom: {
			enabled: true,
			duration: 300
		}
	});
});


// team slider --------------------

$(function() {
    $('.slider__wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });
});