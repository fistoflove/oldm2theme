require(['tinySlider'], function ($) {
    if (screen.width < 1015) {
        var uspSliders = tns({
            container: '.usp-slider',
            items: 1,
            slideBy: 'page',
            controls: false,
            nav: false,
            autoplayButtonOutput: false,
            preventScrollOnTouch: 'auto',
            preventScrollOnTouch: 'force',
            autoplay: true
        });
    }
});