/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});



// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$(document).ready(function(){
    // prevent carousel autoplay
    $("#myCarousel").carousel({
        interval : false
    });
    $(".carousel").carousel({
        interval : false
    });

    // for the image slider on Swoosh's page
    swipeThis(
        'theImageSwipe', // div #id that will render
        662, // width of the images
        370, // height of the images
        'img/portfolio/Swoosh/empty.png', // the image of 'after'
        'img/portfolio/Swoosh/full.png' // the image of 'before'
    );
});


// Where's Paul screens carousel
jQuery(document).ready(function($) {

    $('.carousel').carousel({
        interval: 5000
    });

    //Handles the where's paul carousel thumbnails
    $('[id^=paul-carousel-selector-]').click( function(){
        var id = this.id.substr(this.id.lastIndexOf("-") + 1);
        var id = parseInt(id);
        $('#wheresPaulScreensCarousel').carousel(id);
    });

    //Handles the swoosh carousel thumbnails
    $('[id^=swoosh-carousel-selector-]').click( function(){
        var id = this.id.substr(this.id.lastIndexOf("-") + 1);
        var id = parseInt(id);
        $('#swooshScreensCarousel').carousel(id);
    });
});

