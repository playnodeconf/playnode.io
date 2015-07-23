!(function($) {
  'use strict';

  $('#share-fb').click(function() { shareFb(); });
  $('#share-tw').click(function() { shareTw(); });

  $(document).on("click", ".menu-link", function(event) {
    event.preventDefault();

    var target = $(this).attr('href');
    var offSet = $(target).offset();
      
    $('.main-content').animate({
      scrollTop: offSet.top - 64 + $('.main-content').scrollTop()
    }, 500);

  });

})(window.jQuery);
