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

  $('#d-day').ready(function() {
    var now = new Date();
    var then = new Date("november 12,2015");
    var gap = then.getTime() - now.getTime();
    gap = Math.floor(gap / (1000 * 60 * 60 * 24));
    $('#d-day').text(' (d-' + gap + ')');
  });

  $('.top-navigation').on('click', 'a', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if (target.length) {
        $('#top-naviation').removeClass('active');

        $('html,body').animate({
          scrollTop: target.offset().top - 70
        }, 500);
        return false;
      }
    }
  });

  $('.speakers').on('click', '[data-toggle="speakers"]', function(e) {
    e.preventDefault();

    $('body').removeClass('modal-open');

    var target = $(this);
    var name = target.data('name');

    if(target.data('sns')) {
      name = $('<a/>', {
        target: '_blink',
        href : target.data('sns'),
        text: target.data('name')
      });
    }

    $('#profileModalImg').attr('src', target.data('img'));
    $('#profileModalName').html(name);
    $('#profileModalCompany').text(target.data('company'));
    $('#profileModalInfo').html(target.data('info'));

    $('body').addClass('modal-open');

  });

  $('body').on('click', '.profile-modal-container', function(e) {
    if($(e.target).parents('.profile-modal-container').length === 0) {
      $('body').removeClass('modal-open');
    }
  });

  $('.profile-modal-close-button button').on('click' ,function() {
    $('body').removeClass('modal-open');
  });

  $('.navbar-toggle').on('click', function() {
    $('#top-naviation').addClass('active');
  });

})(window.jQuery);
