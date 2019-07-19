jQuery(document).ready(function( $ ) {

// Navigation Transparent to Solid
$(window).scroll(function(){
    if ($(window).scrollTop()>50){
        $('nav').addClass('navbar-solid');
    } else {
        $('nav').removeClass('navbar-solid');
        $('nav').addClass('navbar-trans');
    }
});

// Smooth Scrolling 
$('.js-scroll').on('click',  function(event){
    if (this.hash !== ""){
        event.preventDefault();
        var hash = this.hash
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function(){
            window.location.hash = hash;
        });
    } //end if
});



// Typed 
if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 50,
            loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
    }


// Testimonial Slide
$('#testimonial-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

// Clients Slide
$('#client-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout: 2500,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// Back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
    } else {
    $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function(){
    $("html, body").animate({scrollTop : 0}, 1500);
    return false;
});


});