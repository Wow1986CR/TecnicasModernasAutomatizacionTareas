//EJERCICIO 01
/*
Profe este no lo logre resolver. Experimente con dos funciones.
La primera trae de vuelta el conteo correcto, pero es una funcion imperativa y devuelve un string.
La segunda entra un poco mas dentro del paradigma de programacion funcional pero no devuelve un
array de arrays y el conteo recorre todo el array sin importar si es consecutivo o no.
*/

let array = ['a', 'a', 'a', 'b', 'b', 'c', 'a', 'b', 'c']

function cntConsecEl(array) {
   let result = "";
   let counter = 1;
  
 for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      counter++;
      
    } else {
      result += array[i] + counter;
      counter = 1;
    }
  }
   return result;
 }
console.log(cntConsecEl(array));



const arr = ['a', 'a', 'a', 'b', 'b', 'c', 'a', 'b', 'c'];

const validador = (previousV, currentV) => {
    previousV[currentV] = (previousV[currentV] || 0) + 1;
  return previousV;
}
const map = arr.reduce(validador, []);
console.log(map);


//EJERCICIO 02
let arr1 = ['a', ['b', 2], 3, null, [[4], ['c']]];

function flatten(arr1) {
   return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}
console.log(flatten(arr1));

//EJERCICIO 03
/*
Profe este ejercicio no logre resolverlo segun lo indicado. Tiene un resultado booleano.
*/

function match(array, word){
  var char_array = word.split(''),
      char, index;
  array = array.join('').split('');
  while(char_array.length > 0){
      char = char_array.shift();
      if ((index = array.indexOf(char)) > -1)
          array.splice(index, 1);
      else
          return false;
  }
  return true;
}

console.log(match(['super','bow','bowl','tar','get','book','let'], "superbowl"))


//EJERCICIO 04
function fn(num){
    let numbString = num + "";
    let total = "";
    for(let i in numbString){
      total += (parseInt(numbString[i])**2 + "");
    }
    return parseInt(total);
  }

console.log(fn(123));