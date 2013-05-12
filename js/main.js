jQuery(document).ready(function ($) {
  var options = {
    cycle             :   1,
    shuffle           :   0,
    firstSlideIndex   :   1,
    autoPlay          :   1, 
    pauseOnHover      :   1,
    autoPlayDelay     :   5000,
    animateFirstSlide :   1,
    keyBoardNav       :   1
  }

  var kickAssSlider = $('#kickass-slider1');
  var kickAss = kickAssSlider.KickAssSlider(options).data('KickAssSlider');
  kickAss.afterLoaded = function () { 
    kickAssSlider.find('.shadow').show();
  }

  if(window.location.hash === '#donate') {
    $('#donate-modal').modal(options).find('.modal-body').html($('#donate').clone());
  }
});  