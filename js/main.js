$(window).on('load', function() {

  $("#preloader").fadeOut("slow");

});

$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;

    $('.listhead').on('mousedown', function() {
    
    if (!active1) $(this).find('.i1').css({'background-color': 'rgba(14,14,14,0.6)', 'transform': 'translate(0px,-125px)'});
    else $(this).find('.i1').css({'background-color': 'rgba(14,14,14,0.6)', 'transform': 'none'}); 
     if (!active2) $(this).find('.i2').css({'background-color': 'rgba(14,14,14,0.6)', 'transform': 'translate(-60px,-105px)'});
    else $(this).find('.i2').css({'background-color': 'rgba(14,14,14,0.6)', 'transform': 'none'});
      if (!active3) $(this).find('.i3').css({'background-color': 'rgba(14,14,14,0.6)', 'transform': 'translate(-105px,-60px)'});
    else $(this).find('.i3').css({'background-color': 'rgba(14,14,14,0.6)', 'transform': 'none'});
      if (!active4) $(this).find('.i4').css({'background-color': 'rgba(14,14,14,0.6)', 'transform': 'translate(-125px,0px)'});
    else $(this).find('.i4').css({'background-color': 'rgba(14,14,14,0.6)', 'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
      
    });

     $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        transitionStyle:"backSlide",
        autoPlay:true
    });
});
$("#myCarousel").on("slide.bs.carousel", function(e) {
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 3;
  var totalItems = $(".carousel-item").length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $(".carousel-item")
          .eq(i)
          .appendTo(".carousel-inner");
      } else {
        $(".carousel-item")
          .eq(0)
          .appendTo($(this).find(".carousel-inner"));
      }
    }
  }
});
$(function(){
  var btn = $(".slider");
  
  btn.on("click",function(){
    $(".slider__item").first().clone().appendTo(".slider");
    $(".slider__image").first().css({transform: "rotateX(-180deg)", opacity: 0});
    setTimeout(function(){
      $(".slider__item").first().remove();
    },200);
  });
});