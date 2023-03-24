$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('.menu').css({
            'position': 'fixed',
            'background': 'rgba(255, 255, 255, 0.95)',
            'box-shadow': '0 0 5px #000',
            'left': '0',
            'right': '0',
            'transition': '1s',
        });
        $('.menu a').css({
            'color': '#000'
        });
    } else {
        $('.menu').css({
            'position': 'relative',
            'background-color': 'transparent',
            'box-shadow': 'none',
        });
        $('.menu a').css({
            'color': '#FFF'
        });
    }
});
