$(document).ready(function () {

//Slider element
  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;

  /*setInterval(function () {
      moveRight();
  }, 5000);*/


  $('#slider').css({ width: slideWidth, height: slideHeight });

  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    var moveRight = function() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

    $("body").keydown(function(e) {
      if(e.keyCode == 37) { // left
        moveLeft();
      }
      else if(e.keyCode == 39) { // right
        moveRight();
      };
  });
// end of slider element

  function adjustLayout() {
        try {
            var divB = $get('#body-wrapper');
            //var divAHeight = 20px;
            divB.style.height = document.body.clientHeight;// - divAHeight ;
        }
        catch (e) { };
    };

    $('.top-navigation-button.inactive').hover(function() {
      if( $(this).hasClass('inactive')){
        $(this).css('background-color','#dbf0ff');
        }}, function() {
        if( $(this).hasClass('inactive')){
          $(this).css('background-color', 'white');
        }
      });

  window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));

  function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
      center: new google.maps.LatLng(20.8482363,-86.875768),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
  }google.maps.event.addDomListener(window, 'load', initialize);

});