!(function($) {
  'use strict';

  $('.top-navigation').on('click', '.shared-btn', function(e) {
    e.preventDefault();

    if ($(this).data('target') === 'fb') {
      shareFb();
    } else if ($(this).data('target') === 'tw') {
      shareTw();
    }

  });
})(window.jQuery);
