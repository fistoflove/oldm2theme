require(['tinySlider'], function () {
    var slider = tns({
        container: '.widget-product-grid-slider',
        items: 3,
        controls: false,
        nav: false,
        fixedWidth: 300,
        swipeAngle: 50,
        center: true,
        autoplayButtonOutput: false,
        mouseDrag: true,
        preventScrollOnTouch: 'auto',
        preventScrollOnTouch: 'force',
        autoplay: false
    });
});