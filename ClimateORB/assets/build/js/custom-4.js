
jQuery(document).ready(function () {
    var container = jQuery(
        '.cmsmasters_slider_5d441aff54863');
    containerWidth = container.width(),
        firstPost = container.find('article'),
        postMinWidth = Number(firstPost.css('minWidth')
            .replace('px', '')),
        postThreeColumns = (postMinWidth * 4) - 1;
    postTwoColumns = (postMinWidth * 3) - 1;
    postOneColumns = (postMinWidth * 2) - 1;


    jQuery('.cmsmasters_slider_5d441aff54863').owlCarousel({
        items: 3,
        itemsDesktop: false,
        itemsDesktopSmall: [postThreeColumns, 3],
        itemsTablet: [postTwoColumns, 2],
        itemsMobile: [postOneColumns, 1],
        transitionStyle: false,
        rewindNav: true,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1000,
        autoPlay: 5000,
        stopOnHover: true,
        autoHeight: true,
        addClassActive: true,
        responsiveBaseWidth: '.cmsmasters_slider_5d441aff54863',
        pagination: false,
        navigation: true,
        navigationText: [
            "<span class=\"cmsmasters_prev_arrow\"><span></span></span>",
            "<span class=\"cmsmasters_next_arrow\"><span></span></span>"
        ]
    });
});
