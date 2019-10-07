var itemsCount=3;
if (window.matchMedia("(max-width: 991px)").matches) {
    itemsCount=2;
}
if (window.matchMedia("(max-width: 767px)").matches) {
    itemsCount=1;
}
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:itemsCount,
    loop:true,
    margin:0,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('autoplay.play.owl',[3000])
})
$('.stop').on('click',function(){
    owl.trigger('autoplay.stop.owl')
})
