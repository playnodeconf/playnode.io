!(function($) {
  'use strict';

  var $webcli = $('#webcli');

  $('#cli-handle').click(function(e) {
    var $this = $(this),
        width = $this.hasClass('closed') ? -256 : 0;
    $webcli.animate({
      'margin-left': width
    });
    $this.children('.icon').toggleClass('icono-terminal').toggleClass('icono-cross');
    $this.toggleClass('closed');
  });

})(window.jQuery);
