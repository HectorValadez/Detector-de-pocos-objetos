var modelo =ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/DE6g-mBkS/model.json",Steve);
function Steve() {
    console.log("Steve termino su casa");
}
function encontrar() {
    var foto =document.getElementById("foto");
    modelo.classify(foto,Tony);

}
function Tony(error,resultado) {
    if (!error) {
        console.log(resultado);
        var cofre=resultado[0].label;
        var lluvia=resultado[0].confidence;
        lluvia =Math.round(lluvia*100)
        document.getElementById("probabilidad").innerHTML=lluvia+"% es un o una "+cofre;
    }
} 
Webcam.set({
    width:265,
    height:265,
    image_format:"png",
    png_quality:90
});

    Webcam.attach("#camara");
    
function capturar() {
    Webcam.snap(function (ip) {
        document.getElementById("captura").innerHTML='<img src="'+ip+'" id="foto">'
        document.getElementById("probabilidad").innerHTML="";
    })
}
