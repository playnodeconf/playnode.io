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
