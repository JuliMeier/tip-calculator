// Ejercicio 23
/*
function crearPiramideNumerica(numeroFinal) {
    for (let i = 1; i <= numeroFinal; i++) {
      let fila = '';
      for (let j = 1; j <= i; j++) {
        fila += i;
      }
      console.log(fila);
    }
  }
  
  // Llamada a la función para crear la pirámide hasta el 30
  crearPiramideNumerica(30);
  */
 
// Ejercicio 24
/*
function crearPiramideInversa(numeroInicial) {
    for(let i = numeroInicial; i >= 1; i-- ){
        let fila = "";
        for (let j = i; j >= 1; j-- ){
            fila+= i;
        }
        console.log(fila);
    }
}
crearPiramideInversa(6);
*/

//Ejercicio 25

function imprimirNumerosConMultiplos() {
    for (let i = 1; i <= 500; i++) {
      let linea = "";
  
      // Verificar si es múltiplo de 4 o 9 y concatenar la etiqueta
      if (i % 4 === 0) {
        linea += `${i} es multiplo de 4 `; // Múltiplo de 4
      } else if (i % 9 === 0) {
        linea += `${i} es multiplo de 9`; // Múltiplo de 9
      } else {
        linea += `${i} `;
      }
  
      // Imprimir la línea completa
      console.log(linea);
  
      // Imprimir la línea horizontal cada 5 líneas
      if (i % 5 === 0) {
        console.log("--------------------");
      }
    }
  }
  
  imprimirNumerosConMultiplos();