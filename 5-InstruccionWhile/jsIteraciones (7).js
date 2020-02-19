function mostrar()
{

	var contador=0;
	var acumulador=0;
  var respuesta = 'si';

  do{
    acumulador = acumulador + parseInt(prompt("Ingrese un numero"));
    contador ++;
    respuesta = prompt("Seguir acumulando");

  }while(respuesta == 'si')


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
