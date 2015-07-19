!(function($) {
  'use strict';

  var jqconsole = $('#console').jqconsole('Welcome play.node();\n', '> ');
  var runCli = function() {
    jqconsole.Reset();
    (function startPrompt() {
      jqconsole.Prompt(true, function (input) {
        try {
          var result = window.eval(input);
          jqconsole.Write(result + '\n', 'jqconsole-output');
        } catch(e) {
          jqconsole.Write(e.message + '\n', 'jqconsole-output');
        }
        startPrompt();
      });
    })();
    jqconsole.Focus();
  }

  var $webcli = $('#webcli');
  $('#cli-handle').on('click', function(e) {
    var $this = $(this);

    $webcli.toggleClass('active');
    $this.children('.icon').toggleClass('icono-terminal').toggleClass('icono-cross');
    if ($webcli.hasClass('active')) {
      runCli();
    }
  });
})(window.jQuery);
