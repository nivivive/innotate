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
        var annot = {
            type: 'text',
            text: text,
            ts: ts
        };
        this.addAnnotationItem(annot);
        showAnnotation(this.annotationItems);
    },
    init: function(){
        $('.annot-button-audio').click(showAudioAnnotationCreator);
        $('.annot-button-url').click(showURLAnnotationCreator);
        $('.annot-button-pic').click(showPictureAnnotationCreator);
        $('.annotate_text .annotation').change(handleNewTextAnnotation);

        $(whichAV).attr('class', 'show');
        document.getElementById(whichAVId).play();
    }

}; // end innotation class

function showAnnotation(annots){

    var t = "<ul class='annotation-list'>";

    // iterate through the array and dynamically generate the HTML
    annots.forEach(function(el){
        t = t + "<li class='annotation'> \n\
                  <div class='annotation time'>" + el.ts + "</div>" +
                " <div class='annotation'>" + el.text + "</div>" +
            "</li>" ;
    });
    t = t + '</ul>';
    $('.annotation_transcript').html(t);
};


function getCurrentTime () {
//   console.log("whichAV: " + whichAV);
//   console.log(" paused: " + $(whichAV).paused + "; ended: " + $(whichAV).ended);
   var div = document.getElementById(whichAVId);
   if (!div.paused && !div.ended) {
//       console.log("CurrentTime: " + div.currentTime);
       return div.currentTime;
   }
   else {
//       console.log("CurrentTime: nothig playing returning null" );
       return null;
   }
}



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

