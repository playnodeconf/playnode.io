!(function($) {
  'use strict';

  var Sticky = function(ele, options) {
    this.options        = options;
    this.$ele           = $(ele);
    this.offsetTop      = 0;
    this.prevScrollTop  = 0;
  };

  Sticky.defulats = {
    
  };

  Sticky.prototype.init = function() {
    this.$ele.on('scroll', $.proxy(this.onContentScroll, this));
  };

  Sticky.prototype.onContentScroll = function(e) {
    var scrollTop = this.$ele.scrollTop();

    this.prevScrollTop = this.prevScrollTop || 0;
    this.offsetTop = this.offsetTop || 0;

    if(scrollTop > this.options.offset) {
      $(this.options.target).addClass('affix');
    } else {
      $(this.options.target).removeClass('affix');
    }

    /* animation-element */
    var $window = $(window);
    // $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    var $animation_elements = $('.animation-element');

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      } else {
        // $element.removeClass('in-view');
      }
    });

  };

  function Plugin(option) {
    return this.each(function() {
      var $this   = $(this),
          data    = $this.data('sticky'),
          options = $.extend({}, Sticky.defulats, $this.data(), typeof option == 'object' && option);

      if (!data) $this.data('sticky', (data = new Sticky(this, options)));    
      if(typeof options === 'string') data[options]();
      else data.init();
    });
  }

  var old = $.fn.sticky;

  $.fn.sticky              = Plugin;
  $.fn.sticky.Constructor  = Sticky;

  $.fn.sticky.noConflict   = function () {
    $.fn.sticky = old
    return this
  }

  $('[data-toggle="sticky"]').each(function() {
    var $this = $(this);
    Plugin.call($this, $this.data());
  });

})(window.jQuery);
