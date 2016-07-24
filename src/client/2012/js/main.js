$(function() {
  //
  // tweet
  //
  $('#tweetFeed').jTweetsAnywhere({
    searchParams: ['q=PlayNode', 'q=playnode', 'q=octoberskyjs', 'q=nodeconf.kr'],
    count: 13,
    showTweetFeed: {
      autorefresh: {
        mode: 'trigger-insert',
        interval: 10
      },
      showTimestamp: {
        refreshInterval: 15
      },
      showTweetFeed: {
        expandHovercards: true,
        showSource: true
      }
    },
    onDataRequestHandler: function(stats, options) {
      if (stats.dataRequestCount < 11) {
        return true;
      } else {
        stopAutorefresh(options);
      }
    },
    tweetFilter: function(status) {
      return !/^RT.*/.test(status.text)
    }
  });

  //
  // auto scroll
  //
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
          var targetOffset = $target.offset().top;
          $('html,body').animate({scrollTop: targetOffset}, 300);
          return false;
        }
      }
  });

  //
  // speakers
  //
  var tpl = $('#profile-contents').html();
  var initFlag = true;
  var SpeakerColl = {
    "a": {
      "name": "박난하",
      "twitter": "nanhapark",
      "company" : "KTH",
      "session": "Node.js In Production",
      "contents": "Production 레벨에서 Node.js 를 사용함에 있어서 logging 부터 SSL까지 약 20가지의 필수적으로 코딩해야만 하는 핵심적인 부분에 대해서 알려드립니다. 이 부분을 알고 나시면 여러분은 고수 ps. 20가지중 realtime 부분에서 100 바이트도 안되는 socket.io tiny-prototyping 사용하여 간단한 장난감부터 Production Level (KTH에서 작업한 UCloud VM 자동생성, 자동설치) 에 적용하기까지의 단계를 설명합니다"
    },
    "b": {
      "name": "백정상",
      "twitter": "jeongsangbaek",
      "company" : "블루윈드",
      "session": "소셜게임 서버 개발 관점에서 본 node.js의 장/단점 과 대안",
      "contents": "소셜 게임 서버 플랫폼으로 node.js 를 선택한 이유와 개발 방법에 대해 소개합니다. 이어서 개발하면서 느꼈던 node.js의 장점과 단점에 대해 설명하고, 단점을 보완하기 위한 대안을 제시합니다."
    },
    "c": {
      "name": "박경욱",
      "twitter": "kyungw00k",
      "company" : "다음커뮤니케이션",
      "session": "When hardware met nodeJS",
      "contents": "NodeJS와 Arduino, BeagleBone, Raspberry Pi를 연결하는 방법과 각각의 사용 경험기를 공유합니다. Just another Javascript Lover"
    },
    "d": {
      "name": "김양원",
      "twitter": "Rhiokim",
      "company" : "KTH",
      "session": "정적 페이지 기반 블로그 엔진 | 하루프레스",
      "contents": "5분만에 설치하는 블로그 엔진!, 웹 서버와 데이터베이스가 필요 없는 초 간편 컨텐츠 메니징 시스템(CMS)! 다양한 테마, 웹 슬라이드, 플러그인, 마크다운 포맷, 데이터 변환 유틸"
    },
    "e": {
      "name": "이재호",
      "twitter": "acidsound",
      "company" : "Appsoulute",
      "session": "Meteor로 만들어보는 Modern Web Application",
      "contents": "Meteor는 올 4월 혜성같이 나타나 월말에 MIT 라이센스로 전환하고 $11.2 million (천백이십만불 한화로 치면 대략 122억) 투자라는 대박을 기록한 프레임워크입니다. Meteor 튜토리얼 세션을 통해 실시간으로 처리가 되는 SNS 어플리케이션을 만들어보면서 Meteor 특유의 Reactive, Hot code push, 최근에 Branch에서 정식 기능으로 추가된 OAuth 및 인증 모듈인 Account 패키지 등을 사용하는 경험을 공유하고자 합니다."
    },
    "f": {
      "name": "홍영택",
      "twitter": "susukang98",
      "company" : "사이냅소프트",
      "session": "Operational Transform in Node.js",
      "contents": "실시간 협업 에디터- 웹 오피스를 개발하며 지난 3년간은 클라이언트 측 자바스크립트만으로 충분했으나 최근 서버 측에 비즈니스로직을 구현하면서 다른 언어(Java, Javascript)로 같은 로직을 두 번 구현하는 상황이 발생 했습니다. 이를 node.js로 해결하려합니다."
    },
    "g": {
      "name": "배성준",
      "twitter": "hanguli",
      "company" : "big4games",
      "session": "모바일 게임 서버 개발을 하면서 만난 node.js",
      "contents": "모바일 게임 서버 개발을 하면서 필요한 서브 프로그램을 nodejs로 하였습니다. Push 서버, Log 서버, 웹이 아닌 서버 프로그램으로 써의 노드의 장점/단점을 이야기 하려고 합니다."
    },
    "h": {
      "name": "변정훈",
      "twitter": "outsideris",
      "company" : "NBP",
      "session": "Learning Dtrace",
      "contents": "Node.js 애플리케이션을 디버깅하고 프로파일링하는 데 중요한 도구로 떠오른 Dtrace를 소개합니다. Dtrace의 사용방법을 익힌 뒤 OS 차원에서 Dtrace를 어떻게 사용하는지 살펴보면서 Dtrace가 할 수 있는 일을 설명하고 Dtrace를 Node.js 어플리케이션에서 어떻게 활용할 수 있는지 살펴봅니다."
    },
    "i": {
      "name": "김범진",
      "twitter": "beejei",
      "company" : "다이렉트미디어",
      "session": "Node.js & Web Service",
      "contents": "리슨미(http://lisn.me)의 사례를 보며 일반 웹 커뮤니티에 필요한 요소를 Node.js로 어떻게 구현하는지 소개합니다. 필요한 정보를 간단하게 확인하면서 안정적인 서비스를 유지하는 노하우도 공개합니다. + 간단하게 새로운 웹 빌드를 어떻게 시작하는지에 대한 소개도 포함됩니다"
    },
    "j": {
      "name": "김익중",
      "twitter": "rheastrike",
      "company" : "드래곤플라이",
      "session": "MMORPG에서의 node.js를 이용한 커뮤니티 설계",
      "contents": "현재 개발중인 SSO 프로젝트의 9월 마일스톤 버전을 통해 node.js/Socket.IO의 적용 사례를 공개합니다. 선택의 이유와 벤치마킹, 그리고 스마트 디바이스를 비롯한 다양한 환경에서의 사례를 발표합니다. 웹브라우저와 웹프로그래머가 아닌 게임과 서버 개발자의 입장에서 바라본 node.js 경험담이 진행되며 Socket.IO용 C++ 클라이언트인 Caloris도 소개합니다."
    },
    "aa": {
      "name": "Isaac Z. Schlueter",
      "twitter": "izs",
      "company" : "Joyent",
      "session": "Keynote",
      "contents": "Node.js를 만든 <a href='https://twitter.com/ryah' target='_blank'>Ryan Dahl</a>에게서 프로젝트를 이어받아 현재 Node.js 개발을 이끌고 있다. Node.js 프로젝트에 초창기부터 참여했으며 패키지매니저인 <a href='https://npmjs.org/' target='_blank'>npm</a>을 만들어서 현재의 수많은 서드파티 모듈들이 만들어지는 기반을 마련했다. 현재는 Node.js의 공식 스폰서인 Joyent에서 풀타임 Node.js 개발자로 일하고 있다."
    },
    "bb": {
      "name": "Mikeal Rogers",
      "twitter": "mikeal",
      "company" : "Gather",
      "session": "미정",
      "contents": "Mozilla, CouchOne, Yammer를 거쳐 현재는 <a href='https://gather.at' target='_blank'>Gather</a>라는 회사를 세워서 일하고 있다. Node.js의 소스공헌자이기도 하며 매년 <a href='http://www.nodeconf.com/' target='_blank'>nodeconf</a>를 개최해서 node.js 홍보와 기술공유에 힘쓰고 있다. 대표적인 모듈로는 HTTP 클라이언트 모듈인 <a href='https://github.com/mikeal/request' target='_blank'>request</a>가 있다."
    },
    "cc": {
      "name": "Charlie Robbins",
      "twitter": "indexzero",
      "company" : "Nodejitsu",
      "session": "미정",
      "contents": "<a href='http://nodejitsu.com/' target='_blank'>노드짓주(nodejitsu)<a/> CEO로써, 노드짓주는  노드 호스팅 사이트와 노드 프로그램을 실행시킬 수 있는 공간을 제공하는 회사이다. New York의 자바스크립트 컨퍼런스인 <a href='http://empirejs.org/' target='_blank'>Empire.js</a>의 큐레이터이기도 하다. 노드 프로세스를 관리하는 <a href='https://github.com/indexzero/forever' target='_blank'>forever</a>와 가장 유명한 로깅모듈인 <a href='https://github.com/flatiron/winston' target='_blank'>winston</a>, 웹프레임워크인 <a href='http://flatironjs.org/' target='_blank'>flatiron</a> 등 유명한 다수의 노드 모듈을 만든 사람이기도 하다."
    }
  };
  $('#speaker a').click(function(e) {
    e.preventDefault();
    var $t = $(e.target), id = $t.parent().data('id');
    if (!id) return;

    var coll = SpeakerColl[id] || null;
    if (coll == null) { alert('not found collection'); return; }


    var r = Mustache.render(tpl, {
      name: coll['name'],
      twitter: coll['twitter'],
      company: coll['company'],
      session: coll['session'],
      contents: coll['contents']
    });
    $('#speaker .zoom-container').html(r).hide().fadeIn();
    $('#speaker .zoom-container img').attr('src', $t.attr('src')).hide().fadeIn();
    if (!initFlag) $('a[href=#speaker]').click()
    initFlag = false;
  }); 
  //
  // init
  //
  $('#speaker a').eq(1).find('img').click();

  $('#menu_organ').click(function() {
    $('#organizers').show();
  });

  $('#organizers').find('h2').find('span').click(function() {
    $('#organizers').hide();
  });

  // tooltip
  $('.organizers').qtip({
    content: {
      attr: 'data-tooltip'
    },
    position: {
      my: "bottom center",
      at: "top center"
    },
    style: {
      classes: 'ui-tooltip-shadow ui-tooltip-youtube'
    }
  })
});
