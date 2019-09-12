var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {       //detecta el boton que fue presionado
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    //para el boton que fue presionado ejecuta la funcion anonima
    var buttonInnerHtml = this.innerHTML; //extrae el texto en html del boton que fue presionado
    makeSound(buttonInnerHtml);  //ejecuta la funcion make sound con el parametro obtenido anteriormente
    buttonAnimation(buttonInnerHtml); // ejecuta la función  con el mismo parametro

  });
}

document.addEventListener("keydown", function(event){ //cuando una tecla sea presionada detecta el evento
  //alert("a button was pressed");
  //console.log(event);
  makeSound(event.key); //ejecuta la funcion con el parametro "event key" que detecta la tecla que fue presionada
  buttonAnimation(event.key);
});

function makeSound(key){ //funcion con parametro key obtenido anteriormente, es una letra
  switch (key){
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3"); 
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default: console.log(key);
  }
  }

  function buttonAnimation(currentKey){ // funcion para animar el boton con el parametro obtenido al hacer click o al presionar una tecla
    var activeButton = document.querySelector("." + currentKey); //seleccionamos el boton presionado y concatenamos el texto para asignaarle una clase
      activeButton.classList.add("pressed"); //al boton seleccionado le asignamos la clase "pressed"
    setTimeout(function () { //esta funcion introduce un retraso en el codigo
      activeButton.classList.remove("pressed"); //funcion a ejecutar
    }, 100); //tiempo que transcurre antes de ejecutar la funcion

  }



// var audio = new Audio("sounds/tom-3.mp3");
// audio.play();
