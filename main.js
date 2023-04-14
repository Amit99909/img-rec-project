Webcam.set(
    {
        height:350,
        width:300,
        image_format:"png",
        png_quality:75
    }
);
camera=document.getElementById("webcam");
Webcam.attach(camera);
function capture_img() {
    Webcam.snap(function (pic) {
        document.getElementById("picture").innerHTML='<img id="pic1" src="'+pic+'">';
    });
}
console.log(ml5.version);
identifier1=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JpWOqdwhT/model.json",modelLoaded);
function modelLoaded() {
    console.log("model loaded");
}
function identify_img() {
    img1=document.getElementById("pic1");
    identifier1.classify(img1,display_result);
}
function display_result(error,answer) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(answer);
        obj_name=answer[0].label;
        obj_acc=answer[0].confidence;
        document.getElementById("result").innerHTML=obj_name;
        document.getElementById("accuracy").innerHTML=obj_acc;
    }
}