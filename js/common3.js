$(document).ready(function(){


  var snow = new Array(30);
  var x = new Array(30);
  var y = new Array(30);
  var speed = new Array(30);

  makeSnow();
  fallSnow();

  function makeSnow() {
    for (var i = 0; i<snow.length; i++ ) {
      x[i] = Math.floor(Math.random() * window.innerWidth)
      y[i] = Math.floor(Math.random() * window.innerHeight)
      speed[i] = Math.random()*2+2;
      console.log(x[i])

      var divTag = "<div class='snow' id='snow"+i+"' style='top:"+y[i]+"px; left:"+x[i]+"px'><img src='images/bubble.png' alt='' width='20'></div>";
      $('body').append(divTag)

      //추가코드
      snow[i] = document.getElementById("snow"+i)
      console.log(snow[i])
    }
  }
  function fallSnow(){
    for ( var i=0; i<snow.length; i++ ) {
      y[i] += speed[i];
      if ( y[i] > window.innerHeight -55 ) {
          y[i] = -20
          x[i] = Math.floor(Math.random() * window.innerWidth-50)
          speed[i] = Math.random()*2+2;
      }
      snow[i].style.top = y[i]+"px";
      snow[i].style.left = x[i]+"px";
    }
    setTimeout(fallSnow, 20)
  }












  })
