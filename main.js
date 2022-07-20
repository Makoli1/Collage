var speakrecognition=window.webkitSpeechRecognition;
var recognition=new speakrecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if (content=="toma mi selfie "){
        speak();
    }
 

}
 function speak(){
     var synth=window.speechSynthesis;
     speack_data=document.getElementById("textbox").value;
     var Utterthis=new SpeechSynthesisUtterance(speack_data);
     synth.speak(Utterthis);
     Webcam.attach(camera);
     setTimeout(function(){
         take_a_snapshot();
         save();
     },5000);

 }
 Webcam.set({
     width:320,
     height:240,
     image_format:'jpeg',
     jpeg_quality:90
 });

camera=document.getElementById("camera");

function take_a_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfieimage" src="'+data_uri+'">';
})
}
function save(){
link=document.getElementById("link");
image=document.getElementById("selfieimage").src;
link.href=image;
link.click();
}
