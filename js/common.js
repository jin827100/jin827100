$(document).ready(function(){

// 네비
$('#gnb > ul, #gnb > a').hide()
$('.menuBtn').on('click', function(){
  $('#gnb > ul').stop().slideDown(700);
  $(this).hide()
  $('.mainText > span, .mouse').stop().css({opacity: 0})
  $('#gnb > a').show()
  $('.mainText').stop().animate({ top: 155 }, 500)
  $('body').css({ overflowY : 'hidden' })

})


$('#gnb > a').on('click', function(){
  if( $(window).width > 1200 ){
    $(this).hide()
    $('#gnb h2').show()
    $('#gnb > ul').stop().slideUp(700);
    $('.mainText').stop().animate({ top: 385 }, 500)
    $('.mainText span, .mouse').stop().animate({opacity: 1}, 1000)
    $('body').css({ overflowY : 'scroll' })

  }
  else {
    $(this).hide()
    $('#gnb h2').show()
    $('#gnb > ul').stop().slideUp(700);
    $('.mainText').stop().animate({ top: 250 }, 500)
    $('.mainText span, .mouse').stop().animate({opacity: 1}, 1000)
    $('body').css({ overflowY : 'scroll' })

  }
})

// 마우스이미지 클릭시
$('.mouse').on('click', function(){
  $('body, html').animate({ scrollTop :  1000 })
})

// 물방울
var bubble = new Array(50);
var x = new Array(50);
var y = new Array(50);
var speed = new Array(50);

makeBubble();
fallBubble();

function makeBubble() {
  for (var i = 0; i<bubble.length; i++ ) {
    x[i] = Math.floor(Math.random() * window.innerWidth -100)
    y[i] = Math.floor(Math.random() * $('#main').height())
    speed[i] = Math.random()*2+2;

    var divTag = "<div class='bubble' id='bubble"+i+"' style='top:"+y[i]+"px; left:"+x[i]+"px'><img src='images/bubble.png' alt='' width='20'></div>";
    $('#main').append(divTag)


    bubble[i] = document.getElementById("bubble"+i)
  }
}
function fallBubble(){
  for ( var i=0; i<bubble.length; i++ ) {
    y[i] += speed[i];
    if ( y[i] > $('#main').height() -55 ) {
        y[i] = -20
        x[i] = Math.floor(Math.random() * window.innerWidth-50)
        speed[i] = Math.random()*2+2;
    }
    bubble[i].style.top = y[i]+"px";
    bubble[i].style.left = x[i]+"px";
  }
  setTimeout(fallBubble, 20)
}


// 흐르는 물 모션
try {
  $('#main').ripples({
    resolution: 200,
    dropRadius: 100,
    perturbance: 0.01,
  });
}
catch (e) {}


// zone
var zone = 1;
$('#zone span.right').on('click', function(){
  if ( zone == 1 ) {
    $('#zone ul.text li:eq(0) h3,#zone ul.text li:eq(0) p,#zone ul.text li:eq(0) a').animate({ opacity: 0}).parent('li').removeClass('textAct')
    $('#zone ul.text li:eq(1)').children('h3, p, a').css({ opacity: 0})
    $('#zone ul.text li:eq(1)').addClass('textAct').children('h3, p, a').animate({ opacity: 1}, 1000)
    $('#zone ul.text').append($('#zone ul.text li:eq(0)'))

    $('.img').animate({ marginLeft: '-=600' }, 1000)
    $('.img li:eq(1) img').animate({ height: 880, marginTop: 0, opacity: 1}, 1000, function(){
      $('.img').css({ marginLeft: 0 }).append($('.img li:eq(0)'))
      zone = 1;
      })
    $('.img li img').not($('.img li:eq(1) img')).animate({ height: 600, marginTop: 140, opacity: 0.7}, 1000)
  }
  zone = 0;
})




$('#zone span.left').on('click', function(){
  if ( zone == 1 ) {
    $('#zone ul.text li:eq(0) h3,#zone ul.text li:eq(0) p,#zone ul.text li:eq(0) a').animate({ opacity: 0}).parent('li').removeClass('textAct')
    $('#zone ul.text li:last').children('h3, p, a').css({ opacity: 0})
    $('#zone ul.text li:last').addClass('textAct').children('h3, p, a').animate({ opacity: 1}, 1000)
    $('#zone ul.text').prepend($('#zone ul.text li:last'))

    $('.img').css({ marginLeft: -600 }).prepend($('.img li:last'))
    $('.img').animate({ marginLeft: '+=600'}, 1000)
    $('.img li:eq(0) img').animate({ height: 880, marginTop: 0, opacity: 1}, 1000, function(){
      zone=1;
    })
    $('.img li img').not($('.img li:eq(0) img')).animate({ height: 600, marginTop: 140, opacity: 0.7}, 1000)
  }
  zone = 0;
})




// performance

$('#performance ul li a').css({ opacity: 0 })

$('#performance ul li').hover(function(){
    $(this).children('a').stop().animate({ opacity: 1}, 500)
}, function(){
    $(this).children('a').stop().animate({ opacity: 0}, 500)
})


// banner

$('#banner').css({ opacity: 0})
$(window).on('scroll', function() {

  if ($(this).scrollTop() >= 500 ) {
    $("#banner").stop().animate({ opacity: 1}, 200)
  }
  else {
      $("#banner").stop().animate({ opacity: 0 }, 200)
  }
})
$('#banner').on('click', function(e){
  $('html, body').stop().animate({ scrollTop : 0 })
  e.preventDefault()
})



  $('#promotion article').css({ opacity: 0})
$(window).on('scroll', function(){
  if ($(this).scrollTop() >= 700 ) {
    $('#promotion article').stop().animate({ opacity: 1}, 500)
  }
  else {
    $('#promotion article').stop().animate({ opacity: 0}, 500)
  }
})


$('.img').css({ opacity: 0})

$(window).on('scroll', function(){
  if ($(this).scrollTop() >= 1400 ) {
    $('.img').stop().animate({ opacity: 1}, 500)
  }
  else {
    $('.img').stop().animate({ opacity: 0}, 500)
  }
})

    $('#performance ul li').css({ opacity: 0})
    $(window).on('scroll', function(){
      if ($(this).scrollTop() >= 2500 ) {
        $('#performance ul li:eq(0):not(:animated)').animate({ opacity: 1}, 500)
        $('#performance ul li:eq(1):not(:animated)').delay(200).animate({ opacity: 1}, 500)
        $('#performance ul li:eq(2):not(:animated)').delay(400).animate({ opacity: 1}, 500)
        $('#performance ul li:eq(3):not(:animated)').delay(600).animate({ opacity: 1}, 500)
        $('#performance ul li:eq(4):not(:animated)').delay(800).animate({ opacity: 1}, 500)
      }
    })

    $("#mainTitle").on('mousewheel',function(e){
    		var wheel = e.originalEvent.wheelDelta;
    		if(wheel>0){
    			$( 'html, body' ).stop().animate( { scrollTop : 0}, 500);  //스크롤 올릴때
    		} else {
    			$( 'html, body' ).stop().animate( { scrollTop : 1000}, 500);  //스크롤 내릴때
    		}
    	});

      $("#promotion").on('mousewheel',function(e){
          var wheel = e.originalEvent.wheelDelta;
          if(wheel>0){
            $( 'html, body' ).stop().animate( { scrollTop : 0}, 500);  //스크롤 올릴때
          } else {
            $( 'html, body' ).stop().animate( { scrollTop : 2000}, 500);  //스크롤 내릴때
          }
        });

        $("#zone").on('mousewheel',function(e){
        		var wheel = e.originalEvent.wheelDelta;
        		if(wheel>0){
        			$( 'html, body' ).stop().animate( { scrollTop : 1000}, 500);  //스크롤 올릴때
        		} else {
        			$( 'html, body' ).stop().animate( { scrollTop : 3000}, 500);  //스크롤 내릴때
        		}
        	});

          $("#performance").on('mousewheel',function(e){
              var wheel = e.originalEvent.wheelDelta;
              if(wheel>0){
                $( 'html, body' ).stop().animate( { scrollTop : 2000}, 500);  //스크롤 올릴때
              } else {
          			$( 'html, body' ).stop().animate( { scrollTop : 3500});  //스크롤 내릴때
          		}
            });





})
