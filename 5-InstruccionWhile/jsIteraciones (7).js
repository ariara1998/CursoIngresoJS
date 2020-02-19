function mostrar()
{

	var contador=0;
	var acumulador=0;
  var respuesta;

  while(respuesta != 'si'){
    acumulador = acumulador + parseInt(prompt("Ingrese un numero"));
    contador ++;
    respuesta = prompt("Dejar de acumular");

  }


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
