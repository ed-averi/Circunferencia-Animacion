var pantalla = document.querySelector("canvas")
var pincel = pantalla.getContext("2d")

pincel.fillStyle="lightgray"
pincel.fillRect(0,0,pantalla.width,pantalla.height)

function circunferencia (x,y,radio){
  pincel.fillStyle="blue"
  pincel.beginPath()
  pincel.arc(x,y,radio,0, 2*Math.PI)
  pincel.fill()
}

function limpiarPantalla(){
  pincel.clearRect(0,0,600,400)
}

var x= 0;
/*
vamos a crear una variable sentido. Vamos a inicializarla con el valor de 1, 
indicando que nuestra variable X debe ser incrementada de 1 en 1. Cuando sea mayor que 600, sentido recibirá el valor de -1, 
lo que hará el de decremento en la variable X.

*/
var sentido = 1;
function actualizarPantalla(){
  limpiarPantalla()
  if(x >600){
    sentido = -1;
  } else if(x <0){
    sentido =1;
  }
  circunferencia(x,20,10)
  x = x + sentido;
}

setInterval(actualizarPantalla,50)
