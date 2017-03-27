

var musica = document.getElementById("rola");

function playAudio() {
  musica.play();

}

function pauseAudio() {
  musica.pause();

}

function stopAudio() {
  musica.load();

}

function subirVolumen() {
  musica.volumen += 0.1;

}

function bajarVolumen() {
  musica.volumen -= 0.1;

}
  //<label for="volumen">Volumen: </label><input type="range" min="0" max="1" value="1" step="0.1" id="volumen">
