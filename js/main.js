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
});
