function mostrar()
{
    var letra;
    var numero;
    var respuesta;
    var contadorPares=0;
    var contadorImpares=0;
    var contadorCeros=0;
    var sumaPositivos=0;
    var contadorpositivos=0;
    var promedioPos=0;
    var sumaNegativos=0;
    var flag=0;
    var numMax;
    var letraMax;
    var numMin;
    var letraMin;

    do{
        letra = prompt("Ingrese una letra.");
        while(!((letra>='A' && letra <='Z')||(letra>='a' && letra <='z'))){
            letra = prompt("Letra invalida. Ingrese una letra.");
        }
        numero = parseInt(prompt("Ingrese un numero entre -100 y 100."));
        while(numero <-100 || numero>100 || isNaN(numero)){
            numero = parseInt(prompt("Numero invalido. Ingrese un numero entre -100 y 100."));
        }
        if(numero%2 == 0){
            contadorPares++;
        }
        else{
            contadorImpares++;
        }
        if(numero>0){
            sumaPositivos= sumaPositivos + numero;
            contadorpositivos++;
        }
        else if(numero==0){
            contadorCeros++;
        }
        else{
            sumaNegativos= sumaNegativos + numero;
        }
        if(flag==0 || numero>numMax){
            numMax=numero;
            letraMax=letra;
        }
        if(flag==0 || numero<numMin){
            numMin=numero;
            letraMin=letra;
            flag=1;
        }
        respuesta = prompt("Quiere seguir ?");
    }while(respuesta=='si')

    if(contadorpositivos != 0){
    promedioPos=sumaPositivos/contadorpositivos;
    }
    
    document.write("a) La cantidad de números pares: " + contadorpositivos + "</br>");
    document.write("b) La cantidad de números impares: " + contadorImpares + "</br>");
    document.write("c) La cantidad de ceros: " + contadorCeros + "</br>");
    document.write("d) El promedio de todos los números positivos ingresados: " + promedioPos + "</br>");
    document.write("e) La suma de todos los números negativos: " + sumaNegativos + "</br>");
    document.write("f) El número y la letra del máximo:  " + numMax + " y " + letraMax + "</br>");
    document.write(" El número y la letra del mínimo:  " + numMin + " y " + letraMin + "</br>");


    
}

