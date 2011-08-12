var whichAV = "#myaudio";
var whichAVId = whichAV.substr(1);
var curAVDiv = null;
$(document).ready( function() {
   console.log("getting " + whichAV);
   console.log("duration " + document.getElementById(whichAVId).duration);
   console.log("source " + document.getElementById(whichAVId).src);
   $(whichAV).attr('class', 'show');
   document.getElementById(whichAVId).play();
} );

// $('#myvideo').play();  get video to play 
// Returns null if nothing playing otherwise a point of time in the video
function getCurrentTime () {
   console.log("whichAV: " + whichAV);
   console.log(" paused: " + $(whichAV).paused + "; ended: " + $(whichAV).ended);
   var div = document.getElementById(whichAVId);
   if (!div.paused && !div.ended) {
       console.log("CurrentTime: " + div.currentTime);
       return $(whichAV).currentTime;
   }
   else {
       console.log("CurrentTime: nothig playing returning null" );
       return null;
   }
}
