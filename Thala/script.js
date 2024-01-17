function sayhii() {
  
    var str = document.querySelector('input').value;
    str = str.toLowerCase();

    if (str.length == 7) {
      // console.log("Thala for a reason");
      playVideo();
      console.log("Kyuki tune 7 alphabet dale hai");
    } else if (Number(str) % 7 == 0) {
      // console.log("Thala for a reason");
      playVideo();
      console.log("Kyuki 7 se cut gya bhai");
    } else if (str.match("2011")) {
      // console.log("Thala for a reason");
      playVideo();
      console.log("world cup jitaya tha bhai");
    } else if (
      str.match("dhoni") ||
      str.match("wicketkeeper") ||
      str.match("caption cool") ||
      str.match("7") ||
      str.match("ms dhoni") ||
      str.match("chennai") ||
      str.match("csk") ||
      str.match("jivha") ||
      str.match("seven") ||
      str.match("thala")
    ) {
      // console.log("Thala for a reason");
      playVideo();
    } else {
      console.log("Rehne de bhai tumse na hoga");
      playaudio();
    }

    // alert(str);
  
}

function playVideo() {

  var con = document.getElementById("container");
  con.style.display = "none";

  var img = document.getElementById("outer");
  img.style.display = "none";

  var r = document.getElementById("res");
  r.style.display = "inline";

   var rr = document.getElementById("res-r");
   rr.style.display = "inline";

  var vp = document.getElementById("videoPlayer");

  vp.src = "VID_24910211_051817_033.mp4";

  vp.play();

  vp.style.display = "block";

}

function playaudio() {

  var con = document.getElementById("container");
  con.style.display = "none";

  var img = document.getElementById("outer");
  img.style.display = "none";

  var wans = document.getElementById("wrongans");
  wans.style.display = "block"
  
  var img2 = document.getElementById("dhoniSad");
  img2.style.display = "block";

  var aud = document.getElementById("moyemoye");
  aud.src = "Moye Moye Ringtone Mp3 Download - MobCup.Com.Co.mp3";
  aud.play();
}

