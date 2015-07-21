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
  window.shareFb = function() {
    var w = 400, h = 300,
        l = (window.screen.width / 2) - ((400 / 2) + 10),
        t = (window.screen.height / 2) - ((300 / 2) + 50);
    var qs = "status=no,height=" + h + ",width=" + w + ",resizable=yes,left=" + l +
      ",top=" + t + ",screenX=" + l + ",screenY=" + t +
      ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";

    var popupUrl = 'https://www.facebook.com/v2.0/dialog/share?app_id=857621464308493' +
                   '&href=' + encodeURIComponent('http://playnode.io') +
                   '&display=popup&redirect_uri=' + encodeURIComponent('http://playnode.io/fb-close.html');
    window.open(popupUrl, 'play.node 2015', qs);
  };
  window.shareTw = function() {
    var w = 400, h = 300,
        l = (window.screen.width / 2) - ((400 / 2) + 10),
        t = (window.screen.height / 2) - ((300 / 2) + 50);
    var qs = "status=no,height=" + h + ",width=" + w + ",resizable=yes,left=" + l +
      ",top=" + t + ",screenX=" + l + ",screenY=" + t +
      ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";

    var popupUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent('http://playnode.io') +
                   '&text=' + encodeURIComponent('playnode 2015') + '&via=playnodeconf';
    window.open(popupUrl, 'play.node 2015', qs);
  };
})(window.jQuery);
