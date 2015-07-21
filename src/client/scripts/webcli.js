!(function($) {
  'use strict';

  var defaultMsg = '사용가능한 명령어를 확인하려면 help()를 실행하세요.' +
                   '\n그 외 JavaScript 코드를 사용할 수 있습니다.' +
                   '\n\n';

  var jqconsole = $('#console').jqconsole(defaultMsg, '> '),
      startPrompt;
  var runCli = function() {
    jqconsole.Reset();
    startPrompt = function() {
      jqconsole.Prompt(true, function (input) {
        input = $.trim(input);

        if (input === '') { return startPrompt(); }
        try {
          var result = window.eval(input);
          jqconsole.Write(result + '\n', 'jqconsole-output');
        } catch(e) {
          jqconsole.Write(e.message + '\n', 'jqconsole-output');
        }
        startPrompt();
      });
    };
    startPrompt();
    jqconsole.Focus();
  }

  var $webcli = $('#webcli'),
      $cliHandle = $('#cli-handle');

  $cliHandle.on('click', function(e) {
    var $this = $(this);
    $webcli.toggleClass('active');
    $this.children('.icon').toggleClass('icono-terminal').toggleClass('icono-cross');
    if ($webcli.hasClass('active')) {
      runCli();
    }
  });

  // commands
  window.help = function() {
    return '콘솔에서는 ' +
           'shareFb(), shareTw(), ' +
           'clear(), exit()' +
           '를 사용할 수 있습니다.';
  };
  window.clear = function() {
    setTimeout(function() {
      jqconsole.Reset();
      startPrompt();
    }, 0);
  };
  window.exit = function() {
    $webcli.toggleClass('active');
    $cliHandle.children('.icon').toggleClass('icono-terminal').toggleClass('icono-cross');
    if ($webcli.hasClass('active')) {
      runCli();
    }
  };
})(window.jQuery);
