$(document).ready(function(){
        playGuile();
        $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
        $('.ryu-throwing').hide();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            })
    })
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    })
});

$(document).keydown(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-cool').show();
      $('.ryu-ready').hide();
      $('.ryu-still').hide();
      $('.ryu-throwing').hide();
    }
  })
$(document).keyup(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });

function playGuile() {
    $('#guile-theme')[0].volume = 0.5;
    $('#guile-theme')[0].load();
    $('#guile-theme')[0].play();
}    

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}