function mostrar()
{

	var contador=0;
	var numero;
	var nummax =0;
	var nummin =0;
	var respuesta;
	// declarar variables

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero)){
			numero = parseInt(prompt("Error. Ingrese un numero"));
		}if(numero > nummax){
			nummax = numero;
		}
		if(){
			nummin = numero;
		}
		respuesta = prompt("Seguir contando");
	
	}while(respuesta == 'si');

	document.getElementById("maximo").value = nummax;
	document.getElementById("minimo").value = nummin;


}//FIN DE LA FUNCIÓN