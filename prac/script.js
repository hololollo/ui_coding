$('.c_wrap').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.c_wrap'
 });
 $('.c_item').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.c_item',
   dots: true,
   focusOnSelect: true
 });

 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.slider-nav').slick('slickGoTo', slideno - 1);
 });