$(function() {

  var input = $(this),
      position = input.offset(),
      doc = $(document).height(),
      head = $('#title').height(),
      top = $('#dials').offset().top,
      redX = $('#red').offset().left,
      greenX = $('#green').offset().left,
      blueX = $('#blue').offset().left,
      data = [],
      rgb = null;

  // new functionality to get color in single event
  // everytime this event is fired it must update the functionality
  $('#dials').on('click', function update_color(event) {
    event.stopPropagation();
    // get the postion of the click event
    var posX = event.pageX;
    var posY = Math.round(event.pageY - top);

    // determine whether the action corresponds to r, g, or b
    if(posX > redX && posX < greenX){
      var r = posY;
      data.push(r);
    }
    if(posX > greenX && posX < blueX){
      var g = posY;
      data.push(g);
    }
    if(posX > blueX ){
      var b = posY;
      data.push(b);
    }

    // keep track of the values that are being fired
    if(data[data.length - 1] == r && (posX > redX && posX < greenX)){
      rVal = data.pop();
    }
    if(data[data.length - 1] == g && (posX > greenX && posX < blueX)){
      gVal = data.pop();
    }
    if(data[data.length - 1] == b && (posX > blueX)){
      bVal = data.pop();
    }
    finalR = typeof(rVal) !== 'undefined' ? rVal : 0;
    finalG = typeof(gVal) !== 'undefined' ? gVal : 0;
    finalB = typeof(bVal) !== 'undefined' ? bVal : 0;

    // append the values in the correct manner
    rgb = 'rgb(' + finalR + ',' + finalG + ',' + finalB + ')';

    // hex converter
    function to_hex(dec) {
        hex = dec.toString(16);
        return hex.length == 2 ? hex : '0' + hex;
    }

    // hsb converter
    function to_hsb(val) {

    }
    // final hex value
    hexVal = '#'+ to_hex(finalR) + to_hex(finalG) + to_hex(finalB);

    // update the color stats
    $('#lowTitle').empty();
    $('#lowTitle').append('<h2>' + rgb + '</h2>' + '</br>' +
                          '<h2>' + 'hex ' + hexVal + '</h2>');
    // fill the svg circle
    $('#color').css('fill', rgb);


    console.log(rgb);
  })


})