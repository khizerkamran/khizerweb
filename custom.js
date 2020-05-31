    $(function () {

        "use strict";
        var wind = $(window);

        /*==================================
         ScrollIt 
        ====================================*/
	$.scrollIt({
        upKey: 38, 
        downKey: 40, 
        easing: 'swing', 
        scrollTime: 700, 
        activeClass: 'active',
        onPageChange: null, 
        topOffset: -15 
    });
        /*==================================
        Navbar Scrolling 
        ====================================*/

        wind.on("scroll", function () {
            var bodyScroll = wind.scrollTop(),
                navbar = $(".navbar")
            if (bodyScroll > 600) {
                navbar.addClass("fixed-top");
            } else {
                navbar.removeClass("fixed-top");
            }
        });
		/* 
    =================================================================
    Parallax background
    ================================================================= 
    */
    
    
      $('.parallax-window').parallax({
        iosFix:true,
        androidFix:true,
        speed:0.1,
      });


    
  });
/* 
    =================================================================
   portfolio content
    ================================================================= 
    */


 $('.grid').imagesLoaded(function () {
              // images have loaded
              //PORTFOLIO START  
              var $grid = $('.grid').isotope({
                itemSelector: '.gallery',
                percentPosition: true,
                masonry: {
                      // use outer width of grid-sizer for columnWidth
                      columnWidth: '.gallery'
                    }
                  })
              // filter items click
              $('.portfolio-filter').on('click', 'li', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                  filter: filterValue
                });
              });
              // filter items on button click
              $('.portfolio-filter').on('click', 'li', function () {
                $(this).addClass('current').siblings().removeClass('current');
              });
              //PORTFOLIO END
            });
 
    // IMAGE LOADED JQUERY END   
    


    //navbar on click addClass and removeClass (active-nav)
    $(document).on("click", ".nav li", function(){

        $(this).addClass('active').siblings().removeClass('active')
    });



    
// =======testimonial

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        navigationText:["",""],
        slideSpeed:1000,
        singleItem:true,
        transitionStyle:"fade",
        autoPlay:true
    });
});

  
// ======Top Scrolling=====

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});