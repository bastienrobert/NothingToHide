Webcam.set({
    width: 1280,
    height: 720,
    image_format: 'jpeg',
    jpeg_quality: 80
});
Webcam.attach('#my_camera');

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById('results').innerHTML =
            '<img src="' + data_uri + '"/>';
    });
}

navigator.getMedia = (navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);

document.querySelector('canvas').addEventListener("click", function(){
  navigator.getMedia({
      video: true
  }, function() {
      setTimeout(function() {
          document.querySelector("section#init").className = "hidden";
          take_snapshot();
          document.querySelector("section#share").className = "visible";
      }, 500);
  }, function() {
      setTimeout(function() {
        document.querySelector("section#init").className = "hidden";
        document.querySelector("section#error").className = "visible";
      }, 10000);
  });
}, true);

document.querySelector('i.icon').addEventListener("click", function(){
  document.querySelector('#box').className = "visible";
  document.querySelector('#blur').className = "visible";
}, true);
document.querySelector('#box .close').addEventListener("click", function(){
  document.querySelector('#box').className = "hidden";
  document.querySelector('#blur').className = "hidden";
}, true);
