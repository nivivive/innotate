/**
 * Created by PyCharm.
 * User: agbattes
 * Date: 8/11/11
 * Time: 5:33 PM
 * To change this template use File | Settings | File Templates.
 */


var innotation = {
    annotationItems:new Array(),
    addAnnotationItem:function(annot){
        this.annotationItems.push(annot);
    },
    addTextAnnotation: function(text){
        var annot = {
            type: 'text',
            text: text,
            ts: new Date().getTime()
        };
        this.addAnnotationItem(annot);
        showAnnotation(this.annotationItems);
    },

}; // end innotation class

function showAnnotation(annots){

    var t = "<ul class='annotation-list'>";

    // iterate through the array and dynamically generate the HTML
    annots.forEach(function(el){
        t = t + "<li class='annotation'> \n\
                  <div class='timestamp'>" + el.ts + "</div>" +
                " <div class='annotation'>" + el.text + "</div>" +
            "</li>" ;
    });
    t = t + '</ul>';
    $('.annotation_transcript').html(t);
};


function showTextAnnotationCreator(){
    console.log("show text");
    $('.annot-text').show();
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

