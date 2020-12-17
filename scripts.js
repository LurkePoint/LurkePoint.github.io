$('.burger').on('click', function (e) {
    e.preventDefault();
    $('.menu-btn').toggleClass('menu-active');
    $('.menu').toggleClass('menu-active');
    $('body').toggleClass('no-scroll');
    
    var tempScrollTop = null;

    tempScrollTop = $(window).scrollTop();

    $(window).scrollTop(tempScrollTop);

    var fixed = document.getElementById('fixed--nav');
       fixed.addEventListener('touchmove', function(e) {
       e.preventDefault();
    }, false);
})
