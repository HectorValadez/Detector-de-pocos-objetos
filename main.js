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
    }
} 
Webcam.set({
    width:265,
    height:265,
    image_format:"png",
    png_quality:90
});
Webcam.on('load', function () {
    webcam.attach("#camara");
    
})
function capturar() {
    Webcam.snap(function (ip) {
        document.getElementById("captura").innerHTML='<img src="'+ip+'" id="foto">'
    })
}
