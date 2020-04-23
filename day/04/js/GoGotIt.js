  var runColor;
  var time = 0;
  var text;

  var runColor = setInterval(function() {
    Go2();
  }, 10);

  function Go2() {
    time += 1;
    if (time >= 360) {
      time = 0;
    } else {
      text = time + "deg";
      $('#midCanvas').css({
        background: "linear-gradient(" + text + ",rgb(207, 138, 153),rgb(125, 167, 172))"
      });
    }
  }
