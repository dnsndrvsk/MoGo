
// NAV-BURGER
(function() {
  var burger = document.querySelector('#header .burger');
  var close = document.querySelector('#header .close');
  var main_nav = document.querySelector('#header .main-menu');

  burger.addEventListener('click', function(e) {
    e.preventDefault();
    main_nav.classList.add('show-nav');
  });

  close.addEventListener('click', function(e) {
    e.preventDefault();
    main_nav.classList.remove('show-nav');
  });
})();

// ACCORDION
(function() {
  document.querySelector('#accordion .selected')
          .style.padding = '14px';
  
  var btns = document.querySelectorAll('#accordion .btn');

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(e) {
      e.preventDefault();

      var items = document.querySelectorAll('#accordion .item-descr');

      for (var i = 0; i < items.length; i++) {
        if (items[i].classList
                    .contains('selected')) {
          items[i].classList.remove('selected');
          items[i].style.padding = '0';
        }
      }

      var parent = this.parentNode;
      parent.children[1].classList.add('selected');
      
      setTimeout(function() {
        parent.children[1].style.padding = '14px';
      }, 100);
    });
  }
})();

// MAIN-NAV
(function() {
  var main_nav = document.querySelector('#header .main-nav');
  var header = document.querySelector('#header');
  var achievements = document.querySelector('#achievements');
  var body = document.body;
  var stopTimeOut;
  
  
  window.addEventListener('scroll', function(e) {
    
    
    var bodyCoords = body.getBoundingClientRect();
    var main_navCoords = main_nav.getBoundingClientRect();
    var achievementsCoords = achievements.getBoundingClientRect();
    var viewport = window.innerHeight;
    
    
    clearTimeout(stopTimeOut);
    
    stopTimeOut = setTimeout(function(e) {
      
      
      if ( bodyCoords.top <= -1 ) {
        main_nav.classList.add('attached');
        header.style.paddingTop = '208px';
      } 
      
      if ( bodyCoords.top >= -2 ) {
        main_nav.classList.remove('attached');
        header.style.paddingTop = '0';
      }
      
      
      
      if ( (achievementsCoords.top <= 150) && !(achievementsCoords.top < -230)) {
        main_nav.classList.add('bg-red');
      } else {
        main_nav.classList.remove('bg-red');
      }
      
      
      
    }, 100);
    
  });
})();




// TESTIMONIALS BUTTONS
(function() {
  
  function handleResize(e) {
    clearTimeout(stop);

    stop = setTimeout(function() {

      comment_width = comment.offsetWidth;

      if ( prev_comment_width === comment_width ) {
        return;
      }

      wrap_width = 0;

      for ( var i = 0; i < comments.length; i++ ) {
        wrap_width += comments[i].offsetWidth;
      }

      if ( prev_wrap_width === wrap_width ) {
        return;
      }
      
      wrap.style.left = 0;
      counter = 0;

      prev_wrap_width = wrap_width;
      prev_comment_width = comment_width;

      wrap.style.width = wrap_width + 'px';
    }, 100);
  }
  
  var btn_left = document.querySelector('#testimonials .btn-left');
  var btn_right = document.querySelector('#testimonials .btn-right');

  var wrap = document.querySelector('#testimonials .comments-wrap');

  var wrap_width = 0;

  var comment = wrap.querySelector('.comment');

  var comment_width = comment.offsetWidth;

  var comments = wrap.querySelectorAll('.comment');

  for ( var i = 0; i < comments.length; i++ ) {
    wrap_width += comments[i].offsetWidth;
  }

  wrap.style.width = wrap_width + 'px';

  var counter = 0;
  var stop;

  var prev_wrap_width = wrap_width;
  var prev_comment_width = comment_width;

  window.addEventListener('resize', handleResize);


  btn_right.addEventListener('click', function(e) {
    e.preventDefault();

    if ( ( wrap.offsetLeft - comment_width ) <= -wrap_width ) {
      return;
    }

    ++counter;

    wrap.style.left = -(comment_width * counter) + 'px';
  });


  btn_left.addEventListener('click', function(e) {
    e.preventDefault();

    if ( wrap.offsetLeft >= 0 ) {
      return;
    }

    --counter;

    wrap.style.left = -(comment_width * counter) + 'px';
  });
  
})();


// SUGGESTIONS BUTTONS
(function() {
  
  function handleResizee(e) {
    clearTimeout(stop);

    stop = setTimeout(function() {

      comment_width = comment.offsetWidth;

      if ( prev_comment_width === comment_width ) {
        return;
      }

      wrap_width = 0;

      for ( var i = 0; i < comments.length; i++ ) {
        wrap_width += comments[i].offsetWidth;
      }

      if ( prev_wrap_width === wrap_width ) {
        return;
      }
      
      wrap.style.left = 0;
      counter = 0;

      prev_wrap_width = wrap_width;
      prev_comment_width = comment_width;

      wrap.style.width = wrap_width + 'px';
    }, 100);
  }
  
  var btn_left = document.querySelector('#suggestions .btn-left');
  var btn_right = document.querySelector('#suggestions .btn-right');

  var wrap = document.querySelector('#suggestions .comments-wrap');

  var wrap_width = 0;

  var comment = wrap.querySelector('.comment');

  var comment_width = comment.offsetWidth;

  var comments = wrap.querySelectorAll('.comment');

  for ( var i = 0; i < comments.length; i++ ) {
    wrap_width += comments[i].offsetWidth;
  }

  wrap.style.width = wrap_width + 'px';

  var counter = 0;
  var stop;

  var prev_wrap_width = wrap_width;
  var prev_comment_width = comment_width;

  window.addEventListener('resize', handleResizee);


  btn_right.addEventListener('click', function(e) {
    e.preventDefault();

    if ( ( wrap.offsetLeft - comment_width ) <= -wrap_width ) {
      return;
    }

    ++counter;

    wrap.style.left = -(comment_width * counter) + 'px';
  });


  btn_left.addEventListener('click', function(e) {
    e.preventDefault();

    if ( wrap.offsetLeft >= 0 ) {
      return;
    }

    --counter;

    wrap.style.left = -(comment_width * counter) + 'px';
  });
  
})();



// MAP
(function() {
  
  function myMap() {
    var mapOptions = {
      center: new google.maps.LatLng(51.5, -0.12),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }
  
  var map_overlay = document.querySelector('#map-section .map-overlay');
  var open_map = document.querySelector('#map-section .open-map');
  var close_map = document.querySelector('#map-section .close-map');

  open_map.addEventListener('click', function(e) {
    e.preventDefault();
    
    map_overlay.classList.add('show-map');
    myMap();
  });

  close_map.addEventListener('click', function(e) {
    e.preventDefault();
    
    map_overlay.classList.remove('show-map');
  });
})();




















