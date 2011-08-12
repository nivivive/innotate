/**
 * Created by PyCharm.
 * User: agbattes
 * Date: 8/11/11
 * Time: 5:33 PM
 * To change this template use File | Settings | File Templates.
 */

var whichAV = "#myaudio";
var whichAVId = whichAV.substr(1);
var curAVDiv = null;

var innotation = {
    annotationItems:new Array(),
    addAnnotationItem:function(annot){
        this.annotationItems.push(annot);
    },
    addTextAnnotation: function(text){
        var ts = getCurrentTime();
        if (ts){
            var annot = {
                type: 'text',
                text: text,
                ts: ts
            };
            this.addAnnotationItem(annot);
            showAnnotation(this.annotationItems);
        }
    },
    init: function(){
        $('.annot-button-audio').click(showAudioAnnotationCreator);
        $('.annot-button-url').click(showURLAnnotationCreator);
        $('.annot-button-pic').click(showPictureAnnotationCreator);
        $('.annotate_text .annotation').change(handleNewTextAnnotation);

        $(whichAV).attr('class', 'show');
//        document.getElementById(whichAVId).play();

        showListPodcasts(playlist);
    }

}; // end innotation class

function showAnnotation(annots){

    var t = "<div class='annotation-list'>";

    // iterate through the array and dynamically generate the HTML
    annots.forEach(function(el){
        t = t + "<div class='annotation'> \n\
                  <span class='annotation time'>" + Math.round(el.ts*10)/10 + ": </span>" +
                " <span class='annotation'>" + el.text + "</span>" +
            "</div>" ;
    });
    t = t + '';
    $('.annotation_transcript').html(t);
};


function getCurrentTime () {
//   console.log("whichAV: " + whichAV);
//   console.log(" paused: " + $(whichAV).paused + "; ended: " + $(whichAV).ended);
   var div = document.getElementById(whichAVId);
   if (!div.ended) { //!div.paused && 
//       console.log("CurrentTime: " + div.currentTime);
       return div.currentTime;
   }
   else {
//       console.log("CurrentTime: nothig playing returning null" );
       return null;
   }
}


function showListPodcasts(podcastItems){
    var t = ''; // url type title
    podcastItems.forEach(function(item, i){
        console.log('element ' + item);
        t = t + '<div class="podcast" id="podcast-'+i+'">' + item.title + ' </div>';
    });
    t = t+ "<script> $('.podcast').click(hasSelectedPodcast);</script>";
    $('.podcast-list').html(t);
};

function hasSelectedPodcast(obj){
//    console.log('new podcast');
    var pid = obj.currentTarget.id.replace('podcast-', '');
    var podcast = playlist[pid];
    var audioSource = document.getElementById('audio-mpeg');
    var audio = document.getElementById(whichAVId);
    audioSource.src = podcast.url;
    audio.load();
//    console.log('has loaded ' + audioSource.src);
//    $(whichAV + ' .mpeg').attr('src', );
//    console.log($(whichAV + ' .mpeg').attr('src'));
};
function handleNewTextAnnotation(){
    console.log('new annotation');
    var text = $('.annotate_text .annotation').val();
    innotation.addTextAnnotation(text);
    $('.annotate_text .annotation').val('');
};
function showAudioAnnotationCreator(){

};
function showURLAnnotationCreator(){

};
function showPictureAnnotationCreator(){

};

