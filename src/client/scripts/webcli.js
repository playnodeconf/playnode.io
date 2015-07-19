!(function($) {
  'use strict';

  var $webcli = $('#webcli');

  $('#cli-handle').on('click', function(e) {
    var $this = $(this);

    $webcli.toggleClass('active');
    $this.children('.icon').toggleClass('icono-terminal').toggleClass('icono-cross');
  });

})(window.jQuery);
