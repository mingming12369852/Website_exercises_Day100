document.onkeydown = function(e) {
  // CDEFGAB
  // DFGHJKL
  console.log(e.key);
  playAnim(e.key);
  switch (e.key) {
    case 'd':
      var audio = new Audio('mp3/pianoC.mp3');
      audio.play();
      // playAnim();
      break;
    case 'f':
      var audio = new Audio('mp3/pianoD.mp3');
      audio.play();
      break;
    case 'g':
      var audio = new Audio('mp3/pianoE.mp3');
      audio.play();
      break;
    case 'h':
      var audio = new Audio('mp3/pianoF.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('mp3/pianoG.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('mp3/pianoA.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('mp3/pianoB.mp3');
      audio.play();
      break;
    default:

      console.log('no this');
  }
}

function playAnim(number) {
  var text = '#' + number;
  var text2 = '#' + number + '2';
  console.log(text);
  $(text).addClass("KeyDown", 200);
  $(text2).addClass("Keyfloat");

  setTimeout(function() {
    $(text).removeClass("KeyDown");

  }, 250);
  setTimeout(function() {
    $(text2).removeClass("Keyfloat");
  }, 3500);

}
