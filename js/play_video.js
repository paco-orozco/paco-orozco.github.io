$(function() {

  //will play the video only when the video section is in view
  $(window).scroll(function() {
    $('.play').each(function() {
        if(isInView(this)) {
            this.play();
        } else {
            this.pause();
        }
    });
  });

  //notify when the video section is in view
  function isInView(el) {
      windowTop = $(window).scrollTop();
      windowBottom = windowTop + $(window).height();
      elTop = $(el).offset().top;
      elBottom = elTop + $(el).height();

      return (elTop >= windowTop && elBottom <= windowBottom);
  }

});