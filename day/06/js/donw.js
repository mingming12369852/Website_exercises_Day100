var w = window.innerWidth;
var h = window.outerHeight;

var i = 0;

function SI() {
  setTimeout(newSnow(), 500);
}

function newSnow() {
  i++;
  var className = 'snow' + i;
  var cssName = '.' + className;
  var run_h = Math.random() * w;
  $('body').after('<div class=" ' + className + '"></div>');
  $(cssName).css({
    'position': 'absolute',
    'width': '8px',
    'height': '8px',
    'margin-left': run_h + 'px',
    'z-index': run_h,
    'background-color': 'rgb(198, 0, 0)',
    'animation': 'donw 2s ease-in 0s infinite ',
  });

  console.log(run_h);

}
