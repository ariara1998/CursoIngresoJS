function mostrar()
{
var marca;
var peso;
var temperatura;
var respuesta;
var contadorTempPar=0;
var marcaMasPesado;
var pesoMaxMenosCero;
var contadorMenosCero=0;
var flag=0;
var acumuladorPeso=0;
var contadorPeso=0;
var promedioPeso;
var pesoMax;
var pesoMin;



do{
    marca = prompt("Ingerese la marca");
    peso = parseInt(prompt("Ingrese un peso entre 1 y 100."));
    while(peso<1 || peso>100 || isNaN(peso)){
        peso = parseInt(prompt("Error. Ingrese un numero entre 1 y 100."));
    }
    temperatura = parseInt(prompt("Ingrese una temperatura entre -30 y 30"));
    while(temperatura<-30 || temperatura>30 || isNaN(temperatura)){
        temperatura = parseInpt(prompt("Error. Ingrese una temperatura entre -30 y 30"));
    }
    if(temperatura%2 == 0){
        contadorTempPar++;
    }
    if(temperatura<=0 && (flag == 0 || peso>pesoMaxMenosCero)){
        pesoMaxMenosCero=peso;
        marcaMasPesado=marca;
        flag=1;
    }
    if(temperatura<0){
        contadorMenosCero++;
    }
    if(contadorPeso==0 || peso>pesoMax){
        pesoMax=peso;
    }
    if(contadorPeso==0 || peso<pesoMin){
        pesoMin=peso;
    }    
    acumuladorPeso = acumuladorPeso + peso;
    contadorPeso++;
}while(respuesta=="si");

if (contadorPeso != 0) {
    promedioPeso = acumuladorPeso / contadorPeso;
}

document.write("a) La cantidad de temperaturas pares: " + contadorTempPar + "</br>");
document.write("b) La marca del producto más pesado: " + marcaMasPesado + "</br>");
document.write("c) La cantidad de productos que se conservan a menos de 0 grados: " + contadorMenosCero + "</br>");
document.write("d) El promedio del peso de todos los productos: " + promedioPeso + "</br>");
document.write("f) El peso máximo: " + pesoMax + "</br>");
document.write("f) El peso mínimo: " + pesoMin + "</br>");
}

/*
function mostrar() {
    var marca;
    var peso;
    var temperatura;
    var seguir;
    var contadorPares = 0;
    var marcaPesada;
    var maximoPeso;
    var flag = 0;
    var contadorCongelados = 0;
    var promedioPeso;
    var acumuladorPeso = 0;
    var contador = 0;
    var pesoMax;
    var pesoMin;

    do {
        // pido los datos
        marca = prompt("Ingrese una marca: ");

        peso = parseInt(prompt("Ingrese un peso (1 y 100): "));
        while (peso < 1 || peso > 100 || isNaN(peso)) {
            peso = parseInt(prompt("Peso invalido. Ingrese un peso (1 y 100): "));
        }

        temperatura = parseInt(prompt("Ingrese un temperatura (-30 y 30): "));
        while (temperatura < -30 || temperatura > 30 || isNaN(temperatura)) {
            temperatura = parseInt(prompt("Temperatura invalido. Ingrese un temperatura (-30 y 30): "));
        }

        if (temperatura % 2 == 0) {
            contadorPares++;
        }

        if ((flag == 0 || peso > maximoPeso) && temperatura > 0) {
            maximoPeso = peso;
            marcaPesada = marca;

            flag = 1;
        }

        if (temperatura < 0) {
            contadorCongelados++;
        }


        if (contador == 0 || peso > pesoMax) {
            pesoMax = peso;
        }
        if (contador == 0 || peso < pesoMin) {
            pesoMin = peso;
        }

        acumuladorPeso = acumuladorPeso + peso;
        contador++;

        seguir = prompt("Quiere continuar?: ");
    } while (seguir == 's');


    promedioPeso = acumuladorPeso / contador;






    document.write("a) La cantidad de temperaturas pares: " + contadorPares + "</br>");
    if (flag == 0) {
        document.write("b) La marca del producto más pesado no congelado: No se ingresaron productos no congelados</br>");

    }
    else {

        document.write("b) La marca del producto más pesado no congelado: " + marcaPesada + " Peso: " + maximoPeso + "</br>");
    }
    document.write("c) La cantidad de productos que se conservan a menos de 0 grados: " + contadorCongelados + "</br>");
    document.write("d) El promedio del peso de todos los productos: " + promedioPeso + "</br>");
    document.write("e) Maximo: " + pesoMax + "</br>");
    document.write("e) Minimo: " + pesoMin + "</br>");

}

*/