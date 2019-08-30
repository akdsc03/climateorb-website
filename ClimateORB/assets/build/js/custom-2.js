
var lsjQuery = jQuery;
lsjQuery(document).ready(function () {
    if (typeof lsjQuery.fn.layerSlider == "undefined") {
        if (window._layerSlider && window._layerSlider
            .showNotice) {
            window._layerSlider.showNotice('layerslider_1',
                'jquery');
        }
    } else {
        lsjQuery("#layerslider_1").layerSlider({
            sliderVersion: '6.1.6',
            type: 'fullwidth',
            responsiveUnder: 0,
            layersContainer: 0,
            hideOnMobile: true,
            hideUnder: 768,
            hideOver: 100000,
            pauseOnHover: 1,
            skin: 'v5',
            showCircleTimer: false,
            skinsPath: 'https://eco-press.cmsmasters.net/wp-content/plugins/LayerSlider/static/layerslider/skins/'
        });
    }
});
