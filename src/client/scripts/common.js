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

  // $('#sponsor-btn').on('click', function(e) {
  //   var w = 800, h = 600,
  //       l = (window.screen.width / 2) - ((800 / 2) + 10),
  //       t = (window.screen.height / 2) - ((600 / 2) + 50);
  //   var qs = "status=no,height=" + h + ",width=" + w + ",resizable=yes,left=" + l +
  //     ",top=" + t + ",screenX=" + l + ",screenY=" + t +
  //     ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
  //
  //   var popupUrl = 'sponsor.html';
  //   window.open(popupUrl, 'play.node 2015', qs);
  // });

  $('#d-day').ready(function() {
    var now = new Date();
    var then = new Date("november 12,2015");
    var gap = then.getTime() - now.getTime();
    gap = Math.floor(gap / (1000 * 60 * 60 * 24));
    $('#d-day').text(' (d-' + gap + ')');
  });

})(window.jQuery);
