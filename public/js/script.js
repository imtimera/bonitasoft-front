import { Utils } from './util';

function initDraw() {
  var canvas = document.getElementById('shape-area');
  function setMousePosition(e) {
      var ev = e || window.event; //Moz || IE
      if (ev.pageX) { //Moz
          mouse.x = ev.pageX + window.pageXOffset;
          mouse.y = ev.pageY + window.pageYOffset;
      } else if (ev.clientX) { //IE
          mouse.x = ev.clientX + document.body.scrollLeft;
          mouse.y = ev.clientY + document.body.scrollTop;
      }
  };

  var mouse = {
      x: 0,
      y: 0,
      startX: 0,
      startY: 0
  };
  var element = null;

  canvas.onmousemove = function (e) {
      setMousePosition(e);
      if (element !== null) {
          element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
          element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
          element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
          element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
      }
  }

  canvas.onclick = function (e) {
      if (element !== null) {
          element = null;
          canvas.style.cursor = "default";
          console.log("finsihed.");
      } else {
          console.log("begun.");
          mouse.startX = mouse.x;
          mouse.startY = mouse.y;
          element = document.createElement('canvas');
          element.className = 'rectangle'
          element.style.position = 'absolute';
          element.style.left = mouse.x + 'px';
          element.style.top = mouse.y + 'px';
          element.style.backgroundColor = randomColor()
          canvas.appendChild(element)
          canvas.style.cursor = "crosshair";
      }
  }
}
function randomColor(){
  var numb = '0123456789ABCDEF'
  var color = '#'
  for(var index=0; index<6; index++){
    color+=numb[Math.floor(Math.random() * 16)]
  }
  return color
}

initDraw();