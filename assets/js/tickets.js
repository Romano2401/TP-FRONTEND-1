var entrada = 200 ;
var estudiante = 0.80;
var trainee = 0.50;
var junior = 0.15;

// funcion resumen

document.getElementById("resumen").addEventListener("click", tickets)
document.getElementById("resumen").addEventListener("click", final)


function tickets () {
    
    // cantidad de entradas
    
    var cantid1 = document.getElementById("cantidad").value;
    var cantid2 = parseInt(cantid1);
    
   // categoria
    
    var categor = document.getElementById("category").value;
    var categoria = parseInt(categor);
   
    //total
   if (categoria==1) {
    total = cantid2 * entrada - (cantid2 * entrada * estudiante);
   } else if (categoria==2) {
    total = cantid2 * entrada - (cantid2 * entrada * trainee);
   } else if (categoria==3) {
    total = cantid2 * entrada - (cantid2 * entrada * junior);
   };
}
 function final() {
    var fnl2 = "Total a Pagar: $";
    document.getElementById("precio").placeholder = fnl2 + total;

 }