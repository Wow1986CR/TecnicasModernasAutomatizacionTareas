let letters = ['a', 'a', 'a', 'b', 'b', 'c', 'a', 'b', 'c'];


console.log([0,1,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector){
    return valorAnterior + valorActual;
  }));
  
  // Primera llamada
  valorAnterior = 0, valorActual = 1, indice = 1
  
  // Segunda llamada
  valorAnterior = 1, valorActual = 2, indice = 2
  
  // Tercera llamada
  valorAnterior = 3, valorActual = 3, indice = 3
  
  // Cuarta llamada
  valorAnterior = 6, valorActual = 4, indice = 4
  
  // el array sobre el que se llama a reduce siempre es el objeto [0,1,2,3,4]
  
  // Valor Devuelto: 10

const arr = ['a','b','c','d','d','e','a','b','c','f','g','h','h','h','e','a'];

// const validador = (previousV, currentV) => {
//     previousV[currentV] = (previousV[currentV] || 0) + 1;
//   return previousV;
// }
// const map = arr.reduce(validador, []);
// console.log(map);
// console.log(arr);

//EJERCICIO 02
let arr1 = ['a', ['b', 2], 3, null, [[4], ['c']]];
function flattenDeep(arr1) {
   return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
console.log(flattenDeep(arr1));

//EJERCICIO 03
let array3 = ['super','bow','bowl','tar','get','book','let'];


let word = 'superbowl';
console.log(Array.from(word));


function wordMatcher(array3,word) {

}

//EJERCICIO 04
function squareNumber(num){
    let numbString = num + "";
    let total = "";
    for(let i in numbString){
      total += (parseInt(numbString[i])**2 + "");
    }
    return parseInt(total);
  }

console.log(squareNumber(123));