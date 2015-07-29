!(function($) {
  'use strict';

  var Typingtext = function(ele, options) {
      this.options        = options;
      this.$ele           = $(ele);
      this.$items         = this.$ele.children('span');
      this.interval       = null;
  };

  Typingtext.defulats = {
    interval: 500,
  };

  Typingtext.prototype.play = function() {
    var self = this;
    var index = 0;
    self.interval =  setInterval(function() {
      if(index >= self.$items.length) {
        clearInterval(self.interval);
      }

      $(self.$items[index]).css({
        display: 'inline-block',
        opacity: 1
      });

      index++;
    }, 75);
    
  };

  function Plugin(option) {
    return this.each(function() {
      var $this   = $(this),
          data    = $this.data('typingtext'),
          options = $.extend({}, Typingtext.defulats, $this.data(), typeof option == 'object' && option);

      if (!data) $this.data('typingtext', (data = new Typingtext(this, options)));    
      if(typeof options === 'string') data[options]();
      else data.play();
    });
  }

  var old = $.fn.typingtext;

  $.fn.typingtext              = Plugin;
  $.fn.typingtext.Constructor  = Typingtext;

  $.fn.typingtext.noConflict   = function () {
    $.fn.typingtext = old
    return this
  }

  $('[data-toggle="typingtext"]').each(function() {
    var $this = $(this);
    Plugin.call($this, $this.data());
  });

})(window.jQuery);
