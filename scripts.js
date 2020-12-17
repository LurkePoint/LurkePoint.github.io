$('.burger').on('click', function (e) {
    e.preventDefault();
    $('.menu-btn').toggleClass('menu-active');
    $('.menu').toggleClass('menu-active');
    $('body').toggleClass('no-scroll');
})
