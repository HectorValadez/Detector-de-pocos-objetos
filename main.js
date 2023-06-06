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
        document.getElementById("captura").innerHTML='<img src="'+ip+'">'
    })
}