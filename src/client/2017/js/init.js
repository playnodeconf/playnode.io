(function(){
  // scroll
  smoothScroll.init();

  document.querySelector('.apply').addEventListener('click', function(evt) {
    location.href = 'https://www-01.ibm.com/events/wwe/grp/grp307.nsf/Registration.xsp?openform&seminar=ZF4BW9ES';
  });

  // map
  var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.5048160, 127.0271528),
    scaleControl: true,
    zoomControl: true,
    scrollWheel: false,
    mapTypeControl: true,
    zoom: 12
  });

  var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.5048160, 127.0271528),
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
  var sponsorsTop = document.querySelector('#sponsor').offsetTop - navHeight;
  var contactusTop = document.querySelector('#contact').offsetTop - navHeight;

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

  var overlay = document.querySelector('.overlay');

  // speakers
  var deatilAll = document.querySelectorAll('#speakers li .detail');
  // var triangleAll = document.querySelectorAll('#speakers li .triangle');
  Array.prototype.forEach.call(document.querySelectorAll('#speakers li'), function(el) {
    el.addEventListener('click', function(evt) {
      var detail = el.querySelector('.detail');
      if (!evt.target.classList.contains('slide') && detail) {
        if (!detail.classList.contains('on')) {
          detail.className += ' on';
          overlay.className += ' on';
        } else {
          detail.classList.remove('on');
          overlay.className = 'overlay';
        }
      }
    });
  });
  // schedule
  Array.prototype.forEach.call(document.querySelectorAll('.session'), function(el) {
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
  document.querySelector('.arrow-down').addEventListener('click', function(evt) {
    if (!nav.classList.contains('on')) {
      nav.className = 'on';
    } else {
      nav.className = 'navbar';
    }
  });
  document.querySelector('nav ul').addEventListener('click', function(evt) {
    if (nav.classList.contains('on')) {
      nav.className = 'navbar';
    }
  });
  
  setInterval(function() {
    aboutTop = document.querySelector('#about').offsetTop - navHeight;
    speakersTop = document.querySelector('#speakers').offsetTop - navHeight;
    scheduleTop = document.querySelector('#schedule').offsetTop - navHeight;
    venueTop = document.querySelector('#venue').offsetTop - navHeight;
    sponsorsTop = document.querySelector('#sponsor').offsetTop - navHeight;
    contactusTop = document.querySelector('#contact').offsetTop - navHeight;
  }, 2000);
})();
