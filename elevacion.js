//Asignación: Hoist de JavaScript//

// Bloque 1
// Interpretación del Intérprete
var hello;
console.log(hello); // undefined
hello = 'world';

// Resultado:
// undefined

// Bloque 2
// Interpretación del Intérprete
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle); // 'magnet'
}
var needle = 'haystack';
test(); // se llama a la función

//  el resultado es:
// magnet
// Bloque 3
// Interpretación del Intérprete
function print(){
    brendan = 'only okay';
    console.log(brendan); // 'only okay'
}
var brendan = 'super cool';
console.log(brendan); // 'super cool'

// el resultado:
// super cool
// Bloque 4
// Interpretación del Intérprete
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food); // 'half-chicken'
    food = 'gone';
    console.log(food); // 'gone'
}
var food = 'chicken';
console.log(food); // 'chicken'
eat(); // Llama a la función

// el resultado:
// chicken
// half-chicken
// gone

//Código 5:
//mean();//Error porque mean es undefined
//console.log(food);// Error si el código se ejecuta estrictamente

var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}

console.log(food);

// codigo 6
console.log(genre); // undefined debido al hoisting
var genre = "disco";
rewind(); // Llama a la función

function rewind() {
    genre = "rock"; // Cambia el valor de la variable `genre` local
    console.log(genre); // "rock"
    var genre = "r&b"; // Nueva variable local `genre` (diferente a la global)
    console.log(genre); // "r&b"
}

console.log(genre); // "disco"

// codigo 7 
dojo = "san jose";
console.log(dojo); // "san jose"
learn(); // Llama a la función

function learn() {
    dojo = "seattle"; // Cambia el valor de la variable `dojo` local
    console.log(dojo); // "seattle"
    var dojo = "burbank"; // Nueva variable local `dojo` (diferente a la global)
    console.log(dojo); // "burbank"
}

console.log(dojo); // "san jose"

// codigo 8 
//console.log(makeDojo("Chicago", 65));
//console.log(makeDojo("Berkeley", 0));
//function makeDojo(name, students){
// const dojo = {};
// dojo.name = name;
// dojo.students = students;
//if(dojo.students > 50){
//   dojo.hiring = true;
// }
// else if(dojo.students <= 0){
//     dojo = "closed for now";
// }
// return dojo;
//}

function makeDojo(name, students) {
    let dojo = {}; // Cambiado a let
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}

console.log(makeDojo("Chicago", 65)); // { nombre: "Chicago", estudiantes: 65, hiring: true }
console.log(makeDojo("Berkeley", 0)); // "closed for now"
