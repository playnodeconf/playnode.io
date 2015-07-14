!(function($) {
  'use strict';

  var Slideshow = function(ele, options) {
      this.options        = options;
      this.$ele           = $(ele);
      this.$slides        = this.$ele.children('li');
      this.timmer         = null;
      this.currentIndex   = 0; // Todo random start
  };

  Slideshow.defulats = {
    interval: 5000,
    duration: 1200 
  };

  Slideshow.prototype.play = function() {
    var self = this;
    this.timmer = setTimeout(function() {
      self.next();
    }, self.options.interval);
  };

  Slideshow.prototype.pause = function() {
    //Todo
  };

  Slideshow.prototype.next = function() {
    var self = this;
    var nextIndex = (this.$slides.length <= this.currentIndex + 1) ? 0 : this.currentIndex + 1;
    
    var nextSlide = $(this.$slides[nextIndex]);
    var currentSlide = $(this.$slides[this.currentIndex]);
    
    nextSlide
      .css('display', 'block')
      .fadeTo(this.options.duration, 1, function() {
        
        self.currentIndex = nextIndex;

        this.timmer = setTimeout(function() {
          self.next();
        }, self.options.interval);
      });

    currentSlide
      .fadeTo(this.options.duration, 0, function() {
          $(this).css('display', 'none');
      });  
  };

  function Plugin(option) {
    return this.each(function() {
      var $this   = $(this),
          data    = $this.data('slideshow'),
          options = $.extend({}, Slideshow.defulats, $this.data(), typeof option == 'object' && option);

      if (!data) $this.data('slideshow', (data = new Slideshow(this, options)));    
      if(typeof options === 'string') data[options]();
      else data.play();
    });
  }

  var old = $.fn.slideshow;

  $.fn.slideshow              = Plugin;
  $.fn.slideshow.Constructor  = Slideshow;

  $.fn.slideshow.noConflict   = function () {
    $.fn.slideshow = old
    return this
  }

  $('[data-toggle="slideshow"]').each(function() {
    var $this = $(this);
    Plugin.call($this, $this.data());
  });

})(window.jQuery);
