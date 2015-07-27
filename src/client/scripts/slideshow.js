!(function($) {
  'use strict';

  var Slideshow = function(ele, options) {
      this.options        = options;
      this.$ele           = $(ele);
      this.$slides        = this.$ele.children('li');
      this.timmer         = null;
      this.currentIndex   = 0; // Todo random start
      if(this.options.shuffle) {
        this.$slides = this.shuffle(this.$slides);
      }
  };

  Slideshow.defulats = {
    interval: 3000,
    duration: 1500,
    shuffle: true 
  };

  Slideshow.prototype.play = function() {
    var self = this;
    self.next();
  };

  Slideshow.prototype.pause = function() {
    //Todo
  };

  Slideshow.prototype.shuffle = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];

        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  };

  Slideshow.prototype.next = function() {
    var self = this;
    var nextIndex = (self.$slides.length <= self.currentIndex + 1) ? 0 : self.currentIndex + 1;
    
    var nextSlide = $(self.$slides[nextIndex]);
    var currentSlide = $(self.$slides[self.currentIndex]);
    
    nextSlide
      .css('display', 'block')
      .fadeTo(self.options.duration, 1, function() {

        $(this).animate({
          transform: 'scale(2) rotate(90deg)'
        }, self.options.interval);

        self.currentIndex = nextIndex;

        self.timmer = setTimeout(function() {
          self.next();
        }, self.options.interval);
      });

    currentSlide
      .fadeTo(self.options.duration, 0, function() {
          $(self).css('display', 'none');
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
