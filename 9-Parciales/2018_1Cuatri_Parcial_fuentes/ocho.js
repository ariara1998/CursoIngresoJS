function mostrar()
{
var letra;
var num;
var numPares=0;
var numCeros=0;
var numImpar=0;
var sumaPositivo=0;
var contadorPositivo=0;
var promedioPositivo;
var sumaNegativo=0;
var flag=0;
var numMax;
var letraMax;
var numMin;
var letraMin;
var letraMinusMin;
var numMinusMin;
var flagMin=0;
var respuesta;

do{
    letra = prompt("Ingrese una letra.");
    while(!((letra>='A' && letra<='Z')||(letra>='a' && letra<='z'))){
        letra = prompt("Error.Ingrese una letra.");
    }
    num = parseInt(prompt("Ingrese un numero entre -100 y 100."));
    while(num<-100 || num>100 || isNaN(num)){
        num = parseInt(prompt("Error. Ingrese un numero entre -100 y 100."));  
    }
    if(num>0){
        sumaPositivo = sumaPositivo + num;
        contadorPositivo++;
    }
    else if(num ==0){
        numCeros++;
    }
    else{
        sumaNegativo = sumaNegativo + num;
    }
    if(num % 2 == 0){
        numPares++;
    }
    else{
        numImpar++;
    }
    if(flag==0){
        numMax=num;
        numMin=num;
        letraMax=letra;
        letraMin=letra;
        flag=1;
    }
    if(num>numMax){
        numMax=num;
        letraMax=letra;
    }
    if(num<numMin){
        numMin=num;
        letraMin=letra;
    }
    if(letra>='a'&& letra<='z'&& flagMin==0){
        letraMinusMin=letra;
        numMinusMin=num;
    }
    if(letra>='a'&& letra<='z'&& num<numMinusMin){
        letraMinusMin=letra;
        numMinusMin=num;
    }
    respuesta = prompt("Quiere seguir?");
}while(respuesta=="si");

if(contadorPositivo==0){
    contadorPositivo=1;
}

promedioPositivo = sumaPositivo / contadorPositivo;

document.write("Cantidad de numeros pares: " + numPares + "</br>");
document.write("Cantidad de numeros impraes: " + numImpar + "</br>");
document.write("Cantidad de ceros: " + numCeros + "</br>");
document.write("Promedio de numeros positivos: " + promedioPositivo + "</br>");
document.write("suma de negativos: " + sumaNegativo + "</br>");
document.write("Numero maximo " + numMax + " y latra " + letraMax + "</br>");
document.write("Numero minimo " + numMin + " y leta " + letraMin + "</br>");
document.write("El menor numero de las minusculas es " + numMinusMin + " y la letra es " + letraMinusMin);
}

