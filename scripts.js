$('.burger').on('click', function (e) {
    e.preventDefault();
    $('.menu-btn').toggleClass('menu-active')
    $('.menu').toggleClass('menu-active')
    $('body').toggleClass('lock')
})

$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++){ 
    $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");    
}