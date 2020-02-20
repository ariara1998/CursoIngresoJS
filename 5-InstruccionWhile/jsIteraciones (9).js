function mostrar()
{

	var flag=0;
	var numero;
	var nummax;
	var nummin;
	var respuesta;
	// declarar variables

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero)){
			numero = parseInt(prompt("Error. Ingrese un numero"));
		}
		        if(flag==0){
			nummax = numero;
			nummin = numero;
			flag = 1;
		}
		if(numero > nummax){
			nummax = numero;
		}
		if(numero < nummin){
			nummin = numero;
		}
		// otra solicion 
		//if (flag == 0 || numero > nummax){
		//    nummax = numero;
		//}	 
		//if (flag == 0 || numero < nummin){
		//    nummin = numero;
		//    flag = 1;
		//}	
		respuesta = prompt("Seguir contando");
	
	}while(respuesta == 'si');

	document.getElementById("maximo").value = nummax;
	document.getElementById("minimo").value = nummin;


}//FIN DE LA FUNCIÓN