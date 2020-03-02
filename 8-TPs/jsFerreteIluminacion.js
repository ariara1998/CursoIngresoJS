/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.

 */
function CalcularPrecio ()
{
    var numLamparas;
    var marca;
    var precioInical;
    var descuento;
    var precioFinal;
    var IIBB;

    numLamparas = document.getElementById("Cantidad").value;
    numLamparas = parseInt(numLamparas);
    marca = document.getElementById("Marca").value;

    precioInical = numLamparas * 35 ;

    if(numLamparas >= 6){
        descuento = precioInical / 2;
    }
    else if(numLamparas == 5){
        switch(marca){
            case "ArgentinaLuz":
                descuento = precioInical * 40 / 100;
                break;
            default:
                descuento = precioInical * 30 / 100;
        }
    }
    else if(numLamparas == 4){
        switch(marca){
            case "ArgentinaLuz":
            case "FelipeLamparas":
               descuento = precioInical * 25 / 100;
               break;
            default:
              descuento = precioInical * 20 / 100;
      }
    }
    else if(numLamparas == 3){
        switch(marca){
            case "ArgentinaLuz":
               descuento = precioInical * 15 / 100
               break;
            case "FelipeLamparas":
               descuento = precioInical * 10 / 100;
               break;
            default:
              descuento = precioInical * 5 / 100;
        }
    }        
    else{
        descuento = 0;
        }

    precioFinal = precioInical - descuento;

    if(precioFinal>120){
        IIBB = precioFinal * 10 /100
        precioFinal = precioFinal + IIBB;
        alert("Usteded pago " + IIBB + " de IIBB.");
    }

    document.getElementById("precioDescuento").value = precioFinal;


}
