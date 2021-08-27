$(document).ready(function () {
    //*****************NAVIGATION*********************
    if ($('#mainNav').offset().top > 50) {
        $('#mainNav').addClass('navbar-shrink');
    }
    //Closes responsive menu when a scroll trigger link is clicked.

    $('.nav-link').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Acrivate Scrollspy to add active class to navbar item on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 70
    });

    // On scroll down if the offset is higher that 50 px and navbar-shrink class else remove that class.
    $(window).scroll(function () {
        if ($('#mainNav').offset().top > 50) {
            $('#mainNav').addClass('navbar-shrink');

        } else {
            $('#mainNav').removeClass('navbar-shrink');
        }

    });
    //*****************DRAG+DROP*********************
    $(function () {
        $('#draggable').draggable({
            grid: [1, 0]
        });
        $('#droppable').droppable({
            drop: function () {
                $('.card').css("border", "transparent");
                $('#droppable').find(".card-title").html('');
            }
        })
    });
    //*****************SCROLL REVEAL************************
    window.sr = ScrollReveal();

    sr.reveal('#dashboard-group', {
        duration: 2000,
        origin: 'right',
        distance: '100px',
        mobile: true,
        viewFactor: 0.2
    });
    sr.reveal('#template-img', {
        duration: 3000,
        origin: 'bottom',
        deplay: 900,
        mobile: true,
        viewFactor: 0.2
    });
    sr.reveal('#first', {
        duration: 1000,
        origin: 'bottom',
        distance: '100px',
        viewFactor: 0.2
    });
    sr.reveal('#second', {
        duration: 1000,
        origin: 'bottom',
        distance: '100px',
        delay: 500,
        viewFactor: 0.2
    });
    sr.reveal('#third', {
        duration: 1000,
        origin: 'bottom',
        distance: '100px',
        delay: 1000,
        viewFactor: 0.2
    });window.sr = ScrollReveal();

    sr.reveal('#dashboard-group', {
        duration: 2000,
        origin: 'right',
        distance: '100px',
        mobile: true,
        viewFactor: 0.2
    });
    sr.reveal('#template-img', {
        duration: 3000,
        origin: 'bottom',
        deplay: 900,
        mobile: true,
        viewFactor: 0.2
    });
    sr.reveal('#first', {
        duration: 1000,
        origin: 'bottom',
        distance: '100px',
        viewFactor: 0.2
    });
    sr.reveal('#second', {
        duration: 1000,
        origin: 'bottom',
        distance: '100px',
        delay: 500,
        viewFactor: 0.2
    });
    sr.reveal('#third', {
        duration: 1000,
        origin: 'bottom',
        distance: '100px',
        delay: 1000,
        viewFactor: 0.2
    });
    //*****************SMOOTHE-SCROLL***********************

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                        ;
                    });
                }
            }
        });

    //*****************END*********************

});