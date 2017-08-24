(function(){
  // scroll
  smoothScroll.init();

  // map
  var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.504836, 127.027206),
    scaleControl: true,
    zoomControl: true,
    scrollWheel: false,
    mapTypeControl: true,
    zoom: 12
  });

  var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.504836, 127.027206),
    map: map
  });

  // header
  var nav = document.querySelector('nav');
  var body = document.querySelector('body');
  var navMenus = document.querySelectorAll('nav ul li');
  var navHeight = 55;

  var aboutTop = document.querySelector('#about').offsetTop - navHeight;
  var speakersTop = document.querySelector('#speakers').offsetTop - navHeight;
  var scheduleTop = document.querySelector('#schedule').offsetTop - navHeight;
  var venueTop = document.querySelector('#venue').offsetTop - navHeight;
  var sponsorsTop = document.querySelector('#sponsors').offsetTop - navHeight;
  var contactusTop = document.querySelector('#contactus').offsetTop - navHeight;

  var navHandler = function() {
    var top = body.scrollTop;
    if (top > 100) {
      if (nav.className === "") {
        nav.className = "dark";
      }
    } else {
      if (nav.className === "dark") {
        nav.className = "";
      }
    }

    if (top < aboutTop) {
      Array.prototype.forEach.call(navMenus, function(el) { el.className = ""; });
    } else if (top >= aboutTop && top < speakersTop) {
      Array.prototype.forEach.call(navMenus, function(el) { el.className = ""; });
      navMenus[0].className = "on";
    } else if (top >= speakersTop && top < scheduleTop) {
      Array.prototype.forEach.call(navMenus, function(el) { el.className = ""; });
      navMenus[1].className = "on";
    } else if (top >= scheduleTop && top < venueTop) {
      Array.prototype.forEach.call(navMenus, function(el) { el.className = ""; });
      navMenus[2].className = "on";
    } else if (top >= venueTop && top < sponsorsTop) {
      Array.prototype.forEach.call(navMenus, function(el) { el.className = ""; });
      navMenus[3].className = "on";
    } else if (top >= speakersTop && top < contactusTop) {
      Array.prototype.forEach.call(navMenus, function(el) { el.className = ""; });
      navMenus[4].className = "on";
    } else if (top >= contactusTop) {
      Array.prototype.forEach.call(navMenus, function(el) { el.className = ""; });
      navMenus[5].className = "on";
    }
  };

  window.addEventListener('scroll', function() {
    window.requestAnimationFrame(navHandler);
  });
  navHandler();

  // speakers
  var deatilAll = document.querySelectorAll('#speakers li .detail');
  var triangleAll = document.querySelectorAll('#speakers li .triangle');
  Array.prototype.forEach.call(document.querySelectorAll('#speakers li'), function(el) {
    el.addEventListener('click', function(evt) {
      var detail = el.querySelector('.detail');
      var oldClassNames = detail.className;
      if (evt.target.tabName !== 'DIV') {
        if (detail.classList.contains("on")) {
          detail.classList.remove("on");
          el.querySelector('.triangle').className = "triangle";
        } else {
          Array.prototype.forEach.call(deatilAll, function(el) { el.classList.remove("on"); });
          Array.prototype.forEach.call(triangleAll, function(el) { el.classList.remove("on"); });
          detail.className = oldClassNames + " on";
          el.querySelector('.triangle').className = "triangle on";
        }
      }
    });
  });
  // schedule
  var overlay = document.querySelector('.overlay');
  Array.prototype.forEach.call(document.querySelectorAll('.session'), function(el) {
    el.addEventListener('mouseover', function(evt) {
      if (el.parentNode.nextElementSibling) {
        var speakers = el.parentNode.nextElementSibling.querySelectorAll('.speaker');
        if (speakers.length > 0) {
          var index = el.getAttribute('data-order');
          speakers[index].className += ' hover';
        }
      }
    });
    el.addEventListener('mouseout', function(evt) {
      if (el.parentNode.nextElementSibling) {
        var speakers = el.parentNode.nextElementSibling.querySelectorAll('.speaker');
        if (speakers.length > 0) {
          var index = el.getAttribute('data-order');
          speakers[index].classList.remove('hover');
        }
      }
    });
    el.addEventListener('click', function(evt) {
      var desc = el.querySelector('.desc');
      if (!evt.target.classList.contains('slide') && desc) {
        if (!desc.classList.contains('on')) {
          desc.className += ' on';
          overlay.className += ' on';
        } else {
          desc.classList.remove('on');
          overlay.className = 'overlay';
        }
      }
    });
  });
  var sessionDesc = document.querySelectorAll('.session .desc');
  overlay.addEventListener('click', function(evt) {
    overlay.className = 'overlay';
    Array.prototype.forEach.call(sessionDesc, function(el) {
      el.className = 'desc';
    });
  });

  // mobile nav
  document.querySelector('nav h1').addEventListener('click', function(evt) {
    if (!nav.classList.contains('on')) {
      nav.className = 'on';
    } else {
      nav.className = '';
    }
  });
  document.querySelector('nav ul').addEventListener('click', function(evt) {
    if (nav.classList.contains('on')) {
      nav.className = '';
    }
  });

  setInterval(function() {
    aboutTop = document.querySelector('#about').offsetTop - navHeight;
    speakersTop = document.querySelector('#speakers').offsetTop - navHeight;
    scheduleTop = document.querySelector('#schedule').offsetTop - navHeight;
    venueTop = document.querySelector('#venue').offsetTop - navHeight;
    sponsorsTop = document.querySelector('#sponsors').offsetTop - navHeight;
    contactusTop = document.querySelector('#contactus').offsetTop - navHeight;
  }, 2000);
})();
