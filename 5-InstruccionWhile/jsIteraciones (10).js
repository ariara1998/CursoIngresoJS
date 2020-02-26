function mostrar()
{

	var contador=0;
	var numero;
	var positivo=0;
	var negativo=0;
	var cantpositovo=0;
	var cantnegativo=0;
	var cantcero=0;
	var cantpares=0;
	var promediopositvo;
	var promedionegativo;
	var respuesta="si";
	//declarar contadores y variables 

	
	do{
		numero=parseInt(prompt("Ingrese un mumero"));
		while(isNaN(numero)){
			numero=parseInt(prompt("Error. Ingrese numero"));
		}
		if(numero%2==0){
			cantpares++;
		}
		if(numero>0){
			positivo+=numero;
			cantpositovo++;
		}
		else if(numero==0){
			cantcero++;
		}
		else{
			negativo+=numero;
			cantnegativo++;
		}
		respuesta=prompt("Quiere ingresar otro numero ?");
	
	}while(respuesta=="si");

	promediopositvo=positivo/cantpositovo;
	promedionegativo=negativo/cantnegativo;

	document.write("Suma de negativos: "+negativo+"</br>");
	document.write("Suma de positivos:"+positivo+"</br>");
	document.write("Cantidad de negativos:"+cantnegativo+"</br>");
	document.write("Cantidad de positivos:"+cantpositovo+"</br>");
	document.write("canridad de ceros:"+cantcero+"</br>");
	document.write("Preomedio de los negativos:"+promedionegativo+"</br>");
	document.write("Promedio de los positivos:"+promediopositvo+"</br>");


}//FIN DE LA FUNCIÓN