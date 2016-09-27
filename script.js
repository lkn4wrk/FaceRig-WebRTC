$(function() {

  var localVideo = $('#facerig').get(0);
  var localStream;

	navigator.mediaDevices.getUserMedia({video: true, audio: false})
	.then(function(stream) {
    localStream = stream;
    localVideo.src = window.URL.createObjectURL(localStream);
	}
	).catch(function(error) {
    console.error('mediaDevice.getUserMedia() error:', error);
    return;
	}
	);

  $(window).resize(function() {
    $('.wrapper').css({
      'width' : $('#facerig').width(),
      'height' : $('#facerig').height()
    });
  });

  $('.wrapper').on('keypress', function(e) {
    if (e.which > 90) {
      $('.left_hand').animate({
        bottom: '-50px'
      }, 200)
      .animate({
        bottom: '-30px'
      }, 30);
    } else {
      $('.right_hand').animate({
        bottom: '-50px'
      }, 200)
      .animate({
        bottom: '-30px'
      }, 30);
    }
  });
});
