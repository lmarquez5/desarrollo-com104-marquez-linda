//Ejercicio 1 - JavaScript
/*Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista desordenada dentro
de una capa del documento html denominada "id_numeros". Cada alumno genera su listado de
número aleatorios. (usar el método sort de js)*/
const arreglo = [97, 5, 31, 46, 26, 61, 49, 41, 91, 42];
arreglo.sort(); console.log(arreglo);

function Ordenar(a,b) {
   return a - b;
}

arreglo.sort(Ordenar);
console.log(arreglo);


//Ejercico 2 - JavaScript
/*Dado un array de números, mostrar cómo quedaría si cada uno de los números es elevado al
cuadrado- (utilizar operadores fincionales)*/

const array = [97, 5, 31, 46, 26, 61, 49, 41, 91, 42];
var array_nuevo = array.map(function(x) {
    return x*x;
    });

console.log(array_nuevo);

//Ejercico 3 - JavaScript
/*Dado eI array ["Florencia", "Lucas", "Ezequiel", "Matias": "Bruno", "Gustavo""Martin"]
Obtener aquellos nombres con al menos 6 letras. (utilizar operadores funcionales)*/

const nombres = ["Florencia","Lucas","Ezequiel","Matias","Bruno","Gustavo","Martin"];

const result = nombres.filter(p => p.length >= 6); console.log(result);

//Ejercico 4 - JavaScript
/*Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con solo los
números pares (utilizar operadores funcionales)*/

const numeros_pares = [3, 61, 80, 145, 182, 177, 166, 118, 106, 173]
console.log(numeros_pares.filter(n => n % 2 === 0 ));


