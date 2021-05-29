$(document).ready(function(){
  var flagsong = 0;
  var flagvol = 1;

  var source = $('.myAudioPlay').attr('src');
  var audioElement = document.createElement('audio');
        
  $(".play-my-song").click(function(){
    $(".music-box").css("display","block");
    $(".music-play-pause>img").attr("src","pause.svg");
    flagsong = 1;
    var source = $(this).val();
    audioElement.setAttribute('src', source);
    audioElement.play();
  });
        
  audioElement.addEventListener('ended', function() {
    this.play();
  }, false);

  audioElement.addEventListener("canplay",function(){
    var s = parseInt(audioElement.duration % 60);
    var m = parseInt((audioElement.duration / 60) % 60);
    $(".length").text(m+":"+s);
  });
        
  audioElement.addEventListener("timeupdate",function(){
    var s = parseInt(audioElement.currentTime % 60);
    var m = parseInt((audioElement.currentTime / 60) % 60);
    $(".currentTime").text(m+":"+s);
  });

  $(".music-play-pause").click(function(){
    if(flagsong == 0) {
      $(".music-play-pause>img").attr("src","pause.svg");
      audioElement.play();
      flagsong = 1;
    }
    else if(flagsong == 1) {
      $(".music-play-pause>img").attr("src","music_play.svg");
      audioElement.pause();
      flagsong = 0;
    }
  });

  var audioSlider = document.getElementById("audio-slider");

  setInterval(updateSongSlider, 1000);
  function updateSongSlider(){
    var c = Math.round(audioElement.currentTime);
    audioSlider.value = c;
    var d = audioElement.duration
    audioSlider.setAttribute("max", d); 
  }

  $("#audio-slider").on('mouseup touchend',function(e){
    audioElement.currentTime = audioSlider.value;
  });

  $(".volume-bar").change(function(){
    let volume = $(this).val();
    audioElement.volume = volume;
    if($(this).val()==0){
      $(".music-vol-btn>img").attr("src","mute.svg");
      flagvol = 0;
    }else{
      $(".music-vol-btn>img").attr("src","volume.svg");
      flagvol = 1;              
    }
  });

  $(".10sec-add").click(function(){
    audioElement.currentTime += 10;          
  });

  $(".10sec-red").click(function(){
    audioElement.currentTime -= 10;          
  });        

  $(".music-vol-btn").click(function(){
    if(flagvol == 0) {
      $(".music-vol-btn>img").attr("src","volume.svg");
      audioElement.muted = false;
      $(".volume-bar").val(1);
      audioElement.volume = 1;
      flagvol = 1;
    }
    else if(flagvol == 1) {
      $(".music-vol-btn>img").attr("src","mute.svg");
      audioElement.muted = true;            
      $(".volume-bar").val(0);
      audioElement.volume = 0;
      flagvol = 0;
    }
  });
});