/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$(document).ready(function() {
    // pushes the id of the modal that's being opened into the browser history.
    $('a[data-toggle="modal"]').on('click', function(e) {
        history.pushState(null, null, $(this).attr('href'));
    });
    // go back to main page, when clicking Back
    window.addEventListener('popstate', function(e) {
        window.location.assign("#");
        $('.portfolio-modal').modal("hide");
    });

    // prevent carousel autoplay
    $(".carousel").carousel({
        interval : false
    });

    //Handles the first where's paul carousel thumbnails
    $('[id^=first-paul-carousel-selector-]').click( function(){
        var id = parseInt(this.id.substr(this.id.lastIndexOf("-") + 1));
        $('#wheresPaulScreensCarousel1').carousel(id);
    });

    //Handles the second where's paul carousel thumbnails
    $('[id^=second-paul-carousel-selector-]').click( function(){
        var id = parseInt(this.id.substr(this.id.lastIndexOf("-"))) + 1;
        $('#wheresPaulScreensCarousel2').carousel(id);
    });

    //Handles the swoosh carousel thumbnails
    $('[id^=swoosh-carousel-selector-]').click( function(){
        var id = parseInt(this.id.substr(this.id.lastIndexOf("-") + 1));
        $('#swooshScreensCarousel').carousel(id);
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
});