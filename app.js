$(document).ready(function() {
  // Popup Email
  var email;

  $('.popup__skip, .popup__submit').on('click', function() {
    $('.popup').fadeOut();
  });

  $('.popup__skip').on('click', function() {
    email = generateEmail();
    xapistatement('experienced','http://virtual-reality-seattle.com/water-front/landing','what it is like','in Waterfront');
  });

  $('.popup__submit').on('click', function() {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var input = $('.popup__input').val();

    email = regex.test(input) ? input : generateEmail();
    xapistatement('experienced','http://virtual-reality-seattle.com/water-front/landing','what it is like','in Waterfront');
  });



  // A-Frame
  var scene = document.querySelector('a-scene');
  var fuse = document.querySelector('#fuse-cursor');
  var fuseProgress = document.querySelector('#fuse-progress');


  scene.addEventListener('loaded', function() {
    $('#preloader').hide();
  });

  fuse.addEventListener('fusing', function() {
    fuseProgress.emit('fusing');
  });

  $('#tip-1').on('click', function() {
    document.querySelector('#tip-1-text').emit('trigger-clicked');
    document.querySelector('#tip-1-background').emit('trigger-clicked');
  });
  
  $('#tip-2').on('click', function() {
    document.querySelector('#tip-2-text').emit('trigger-clicked');
    document.querySelector('#tip-2-background').emit('trigger-clicked');
  });

  $('#tip-3').on('click', function() {
    document.querySelector('#tip-3-text').emit('trigger-clicked');
    document.querySelector('#tip-3-background').emit('trigger-clicked');
  });

  $('#tip-4').on('click', function() {
    document.querySelector('#tip-4-text').emit('trigger-clicked');
    document.querySelector('#tip-4-background').emit('trigger-clicked');
  });

  $('#tip-5').on('click', function() {
    document.querySelector('#tip-5-text').emit('trigger-clicked');
    document.querySelector('#tip-5-background').emit('trigger-clicked');
  });





  

});

